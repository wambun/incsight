import Link from 'next/link';
import { Navbar, Footer, Container, Button } from '@/components/shared';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Container>
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-navy-900 dark:text-white">
              404
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-navy-700 dark:text-navy-200">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-navy-500 dark:text-navy-400 max-w-md">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
              Please check the URL or head back to the homepage.
            </p>
            <div className="mt-8">
              <Button href="/" size="lg">
                Back to Homepage
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
