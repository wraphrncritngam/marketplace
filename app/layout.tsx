import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Campus Nexus - Marketplace',
  description: 'ตลาดนัดนักศึกษา',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-[#070b14] antialiased">
        {children}
      </body>
    </html>
  );
}