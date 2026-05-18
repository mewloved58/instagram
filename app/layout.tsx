import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cozy Circle',
  description: 'Private real-time emotional sharing app for close friends and family.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
