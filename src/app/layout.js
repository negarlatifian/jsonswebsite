import './globals.css';

import { urban } from '@/fonts';

export const metadata = {
  title: 'JSON E. Bowman',
  description: "Json E. Bowman's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={urban.className}>{children}</body>
    </html>
  );
}
