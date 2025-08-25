import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Whabitr - Best Habit Tracker to Build Habits That Stick',
  description: 'Whabitr is a free and powerful habit tracker that helps you build streaks and achieve your goals. Track and build habits with ease!',
  keywords: ['habit tracker', 'productivity app', 'build habits', 'habit streaks', 'goal tracker'],
  robots: 'index, follow',
  metadataBase: new URL('https://whabitr.online'),
  alternates: {
    canonical: 'https://whabitr.online',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href="https://whabitr.online" />
        <link rel="icon" href="/favicon" type="image/png" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Analytics />
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}



