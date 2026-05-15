import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: "HTX Bakehouse — Houston's Cookie. No Cap.",
    template: '%s | HTX Bakehouse',
  },
  description:
    "Houston's premium gourmet cookie brand. Torres method. Levain size. Brown butter, Valrhona chocolate, Maldon salt. Zero artificial flavors. Weekend pickup in Houston, TX.",
  keywords: ['Houston cookies', 'gourmet cookies Houston', 'HTX Bakehouse', 'best cookies Houston', 'Torres method cookies'],
  openGraph: {
    title: "HTX Bakehouse — Houston's Cookie. No Cap.",
    description: 'Torres Method. Levain Size. HTX Made. Premium gourmet cookies in Houston, TX.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'HTX Bakehouse',
              description: 'Premium gourmet cookies in Houston, TX. Torres method, Levain size.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Houston',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              openingHours: 'Sa-Su',
              servesCuisine: 'Bakery',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
