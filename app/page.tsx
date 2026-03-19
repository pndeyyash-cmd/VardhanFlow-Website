'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ProductShowcase } from '@/components/product-showcase';
import { About } from '@/components/about';
import { Portfolio } from '@/components/portfolio';
import { FAQ } from '@/components/faq';
import { Terms } from '@/components/terms';
import { Privacy } from '@/components/privacy';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ProductShowcase />
      <About />
      <Portfolio />
      <FAQ />
      <Terms />
      <Privacy />
      <Footer />
    </main>
  );
}
