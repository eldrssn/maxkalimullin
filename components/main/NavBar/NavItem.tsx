import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { NavItemProps } from './types';

const NavItem: FC<NavItemProps> = ({ path, name }) => {
  const pathname = usePathname() || '/';
  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
        {
          'text-neutral-500': !isActive,
          'font-bold': isActive,
        },
      )}
    >
      <span className='relative py-[5px] px-[10px]'>
        {name}
        {path === pathname ? (
          <motion.div
            className='absolute inset-0 bg-neutral-300 dark:bg-neutral-800 rounded-md z-[-1]'
            layoutId='sidebar'
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
};

export default NavItem;
