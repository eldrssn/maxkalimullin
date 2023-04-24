import { FC } from 'react';
import { ContactProps } from './types';

const Contact: FC<ContactProps> = ({ contact: { title, href, Icon } }) => (
  <a
    className='flex flex-row items-center justify-center h-10 gap-2 px-2 py-6 transition-all border rounded-lg border-neutral-800 border-spacing-2 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-600'
    key={title}
    rel='noreferrer'
    target='_blank'
    href={href}
  >
    {Icon && <Icon />} <p>{title}</p>
  </a>
);

export default Contact;
