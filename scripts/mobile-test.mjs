import { chromium } from 'playwright';

const BASE_URL = 'https://incsight.vercel.app';

const devices = [
  { name: 'iPhone 14 Pro', width: 393, height: 852 },
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'Samsung Galaxy S21', width: 360, height: 800 },
];

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/services', name: 'Services' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
];

async function testMobileResponsiveness() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  console.log('🔍 Testing Mobile Responsiveness\n');
  console.log('='.repeat(60));

  for (const device of devices) {
    console.log(`\n📱 ${device.name} (${device.width}x${device.height})`);
    console.log('-'.repeat(40));

    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
    });

    for (const page of pages) {
      const browserPage = await context.newPage();
      const issues = [];

      try {
        await browserPage.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });

        // Check for horizontal overflow
        const hasHorizontalScroll = await browserPage.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        if (hasHorizontalScroll) {
          issues.push('Horizontal scroll detected');
        }

        // Check if mobile menu button exists on small screens
        if (device.width < 810) {
          const mobileMenuExists = await browserPage.locator('button[aria-label*="menu"], button[aria-label*="Menu"]').count();
          if (mobileMenuExists === 0) {
            // Check for hamburger icon
            const hamburgerExists = await browserPage.locator('svg.lucide-menu, [class*="Menu"]').count();
            if (hamburgerExists === 0) {
              issues.push('Mobile menu button not found');
            }
          }
        }

        // Check for text that's too small
        const smallText = await browserPage.evaluate(() => {
          const elements = document.querySelectorAll('p, span, a, li');
          let tooSmall = 0;
          elements.forEach(el => {
            const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
            if (fontSize < 12 && el.textContent.trim().length > 0) {
              tooSmall++;
            }
          });
          return tooSmall;
        });
        if (smallText > 5) {
          issues.push(`${smallText} elements with font < 12px`);
        }

        // Check touch targets
        const smallTouchTargets = await browserPage.evaluate(() => {
          const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
          let tooSmall = 0;
          interactiveElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
              // Only count visible elements
              const style = window.getComputedStyle(el);
              if (style.display !== 'none' && style.visibility !== 'hidden') {
                tooSmall++;
              }
            }
          });
          return tooSmall;
        });
        if (smallTouchTargets > 3) {
          issues.push(`${smallTouchTargets} small touch targets (<44px)`);
        }

        // Check for console errors
        const consoleErrors = [];
        browserPage.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });

        // Take screenshot
        const screenshotPath = `./screenshots/${device.name.replace(/\s+/g, '-')}-${page.name}.png`;
        await browserPage.screenshot({ path: screenshotPath, fullPage: false });

        const status = issues.length === 0 ? '✅' : '⚠️';
        console.log(`  ${status} ${page.name}: ${issues.length === 0 ? 'OK' : issues.join(', ')}`);

        results.push({
          device: device.name,
          page: page.name,
          issues,
          screenshot: screenshotPath,
        });

      } catch (error) {
        console.log(`  ❌ ${page.name}: ${error.message}`);
        results.push({
          device: device.name,
          page: page.name,
          issues: [error.message],
          screenshot: null,
        });
      }

      await browserPage.close();
    }

    await context.close();
  }

  await browser.close();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));

  const totalTests = results.length;
  const passedTests = results.filter(r => r.issues.length === 0).length;
  const failedTests = totalTests - passedTests;

  console.log(`\n✅ Passed: ${passedTests}/${totalTests}`);
  console.log(`⚠️  Issues: ${failedTests}/${totalTests}`);

  if (failedTests > 0) {
    console.log('\n📋 Issues Found:');
    results.filter(r => r.issues.length > 0).forEach(r => {
      console.log(`  • ${r.device} - ${r.page}: ${r.issues.join(', ')}`);
    });
  }

  console.log('\n📸 Screenshots saved to ./screenshots/');
}

// Create screenshots directory
import { mkdir } from 'fs/promises';
await mkdir('./screenshots', { recursive: true });

testMobileResponsiveness().catch(console.error);
