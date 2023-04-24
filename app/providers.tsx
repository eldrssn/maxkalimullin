'use client';

import { ThemeProvider } from '@wits/next-themes';
import { FC } from 'react';

import { Props } from 'types';

const Providers: FC<Props> = ({ children }) => (
  <ThemeProvider attribute='class'>{children}</ThemeProvider>
);

export default Providers;
