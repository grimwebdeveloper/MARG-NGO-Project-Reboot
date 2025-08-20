import './globals.css';
import { Zilla_Slab } from 'next/font/google';

// Load the font
const zillaSlab = Zilla_Slab({
  subsets: ['latin'], // required
  weight: ['300', '400', '500', '600', '700'], // choose what you need
  style: ['normal', 'italic'], // add italic if needed
});

export const metadata = {
  title: 'MARGNGO',
  description: 'This is a ngo website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${zillaSlab.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}