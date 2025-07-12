import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Whabitr - Track & Win',
  description: 'Track and build habits with ease!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper><Navbar/>{children}</SessionWrapper>
      </body>
    </html>
  );
}

