'use client';

import { useEffect, useState } from 'react';

import { useToggleTheme } from 'hooks/useToggleTheme';
import { SwitcherIcon } from 'components/icons/SwitcherIcon';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useToggleTheme();

  const toggleThemeHandler = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      id='theme-toggle'
      type='button'
      title='light or dark mode'
      aria-label='auto'
      aria-live='polite'
      onClick={toggleThemeHandler}
      className='h-8 w-8 md:mt-7 transition mr-10 transform  ease-in-out duration-500 bg-transparent border-none p-0 aspect-square rounded-full pointer-events-auto touch-manipulation outline-offset-8'
    >
      <SwitcherIcon />
    </button>
  );
};

export default ThemeSwitcher;
