import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { themeEffect } from "@/app/theme-effect";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicius Pacheco's blog",
  description:
    "Vinicius Pacheco is a Brazilian Full Stack Developer based in Rio de Janeiro.",
  openGraph: {
    title: "Vinicius Pacheco's blog",
    description:
      "Vinicius Pacheco is a Brazilian Full Stack Developer based in Rio de Janeiro.",
    url: "https://vinpac.io",
    siteName: "Vinicius Pacheco's blog",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vinpac_io",
    creator: "@vinpac_io",
  },
  alternates: {
    canonical: "https://vinpac.io",
    types: {
      "application/rss+xml": "https://vinpac.io/feed.xml",
    },
  },
  metadataBase: new URL("https://vinpac.io"),
  icons: {
    icon: [
      {
        url: "/favicon/light/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/light/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/light/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/light/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/light/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicon/light/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/canvas-pattern.png')] dark:bg-[url('/dark-canvas-pattern.png')]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen p-4 max-w-3xl mx-auto flex flex-col">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vinicius Pacheco's blog",
              url: "https://vinpac.io",
              author: {
                "@type": "Person",
                name: "Vinicius Pacheco",
                url: "https://vinpac.io/about",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
