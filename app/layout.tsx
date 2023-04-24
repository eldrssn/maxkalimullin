import { FC } from 'react';
import { ServerThemeProvider } from 'next-themes';
import { Roboto_Flex } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import NavBar from 'components/main/NavBar';
import Providers from './providers';

import { name } from 'constants/info';
import { Props } from 'types';

import './globals.css';

const robotoFlex = Roboto_Flex({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: name,
    template: `%s | ${name}`,
  },
  description: 'Frontend Developer | React.js, Next.js, Redux, Typescript',
  icons: {
    shortcut: '/favicon.svg',
  },
};

const RootLayout: FC<Props> = ({ children }) => (
  <>
    <ServerThemeProvider attribute='class'>
      <html lang='en'>
        <body
          className={`${robotoFlex.className} text-slate-950 dark:text-zinc-100/75 bg-zinc-100 dark:bg-slate-950 flex flex-col max-w-4xl mx-4 mt-8 mb-10 antialiased md:flex-row md:mt-20 lg:mt-32 lg:mx-auto`}
        >
          <Providers>
            <NavBar />
            <main className='flex flex-col flex-auto min-w-0 px-2 mt-1 md:px-0'>
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>

    <Analytics />
  </>
);

export default RootLayout;
