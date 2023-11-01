import './globals.css';

import { urban } from '@/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={urban.className}>{children}</body>
    </html>
  );
}
