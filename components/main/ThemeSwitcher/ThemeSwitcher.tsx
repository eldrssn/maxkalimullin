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
      className='absolute w-8 h-8 p-0 mr-10 transition duration-500 ease-in-out transform bg-transparent border-none rounded-full pointer-events-auto md:top-6 right-6 top-4 md:mt-7 aspect-square touch-manipulation outline-offset-8'
    >
      <SwitcherIcon />
    </button>
  );
};

export default ThemeSwitcher;
