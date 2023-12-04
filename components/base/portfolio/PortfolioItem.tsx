import { FC } from 'react';
import Image from 'next/image';

import { GithubIcon } from 'components/icons/GithubIcon';
import LinkIcon from 'components/icons/LinkIcon';
import { IPortfolioItem } from 'types';

export const PortfolioItem: FC<{ item: IPortfolioItem }> = ({
  item: { title, description, images, link, github },
}) => {
  const links = [
    { href: github, icon: <GithubIcon /> },
    { href: link, icon: <LinkIcon /> },
  ];

  return (
    <div
      key={title}
      className='group overflow-hidden transition-all relative duration-300 pb-4 rounded-2xl border-neutral-800 border-spacing-2 hover:scale-105 md:basis-[47%] hover:shadow-lg hover:dark:shadow-cyan-500/50'
    >
      <div className='relative w-full h-64 mb-4'>
        <Image
          src={images}
          fill={true}
          alt={title}
          className='object-cover'
          placeholder='blur'
        />
      </div>

      <h3 className='mx-4 mb-2 text-xl font-medium'>{title}</h3>
      <p className='mx-4 text-sm opacity-70 group-hover:opacity-100'>
        {description}
      </p>

      <div className='flex flex-row mx-4 my-4 gap-2'>
        {links.map((link, index) => (
          <a
            key={index}
            className='px-4 py-2 border-2 rounded-2xl border-neutral-800/50 dark:border-cyan-500/50'
            href={link.href}
            target='_blank'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
