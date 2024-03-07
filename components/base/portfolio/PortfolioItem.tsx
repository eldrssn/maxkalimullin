'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GithubIcon } from 'components/icons/GithubIcon';
import LinkIcon from 'components/icons/LinkIcon';
import { IPortfolioItem } from 'types';

export const PortfolioItem: FC<{ item: IPortfolioItem }> = ({
  item: { title, description, images, link, github },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    { href: github, icon: <GithubIcon /> },
    { href: link, icon: <LinkIcon /> },
  ];
  const [imgMain, imgNext] = images;

  return (
    <div
      key={title}
      className='group overflow-hidden transition-all relative duration-300 pb-4 rounded-2xl border-neutral-800 border-spacing-2 hover:scale-105 md:basis-[47%] hover:shadow-lg hover:dark:shadow-cyan-500/50'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link} className='block relative w-full h-64 mb-4'>
        {isHovered && imgNext ? (
          <Image
            src={imgNext}
            fill={true}
            alt={title}
            className='object-cover'
          />
        ) : (
          <Image
            src={imgMain}
            fill={true}
            alt={title}
            className='object-cover'
            placeholder='blur'
          />
        )}
      </Link>

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
