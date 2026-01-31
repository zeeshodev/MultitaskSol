import type { Metadata } from "next";
import "./globals.css";

// Note: Google Sans (Product Sans) is not available via next/font/google
// We'll use the closest alternative which is Inter, or load it via CSS

export const metadata: Metadata = {
  title: {
    default: "Multi Task Solutions | Leading Software & Digital Marketing Agency",
    template: "%s | Multi Task Solutions"
  },
  description: "MTS is a premier software company specializing in Web Development, SEO, Digital Marketing, and UI/UX Design. Grow your business with our data-driven strategies.",
  keywords: ["Software Company", "Web Development", "SEO Agency", "Digital Marketing", "UI/UX Design", "Product Development"],
  authors: [{ name: "Multi Task Solutions" }],
  creator: "Multi Task Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mts.com",
    siteName: "Multi Task Solutions",
    title: "Multi Task Solutions | Premier Software & Marketing Agency",
    description: "Expert Web Dev, SEO, and Digital Marketing Services targeted for high-growth businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Multi Task Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi Task Solutions | Premier Software & Marketing Agency",
    description: "Expert Web Dev, SEO, and Digital Marketing Services targeted for high-growth businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
