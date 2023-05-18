'use client';

import { LayoutGroup } from 'framer-motion';

import { navItems } from 'constants/navItems';
import ThemeSwitcher from '../ThemeSwitcher';
import NavItem from './NavItem';

const NavBar = () => (
  <>
    <aside className='md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 md:mt-6'>
      <div className='flex items-center justify-between lg:sticky lg:top-20 md:flex-col'>
        <LayoutGroup>
          <nav
            className='relative flex flex-row items-start px-4 pb-0 md:flex-col md:px-0 fade md:overflow-auto scroll-pr-6 md:relative'
            id='nav'
          >
            <div className='flex flex-row pr-10 mt-2 mb-2 space-x-0 md:flex-col md:mt-0'>
              {Object.entries(navItems).map(([path, { name }]) => (
                <NavItem key={path} path={path} name={name} />
              ))}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
    <ThemeSwitcher />
  </>
);

export default NavBar;
