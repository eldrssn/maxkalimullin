import { EmailIcon } from 'components/icons/EmailIcon';
import { GithubIcon } from 'components/icons/GithubIcon';
import { LinkedInIcon } from 'components/icons/LinkedInIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import plantStore from 'public/plants.jpg';
import chess from 'public/chess.jpg';
import promogroup from 'public/promogroup1.jpg';
import keyboard from 'public/my_keyboard.jpg';

export const name = 'Maxim Kalimullin';

export const contacts = [
  {
    title: 'Email',
    href: 'mailto:maxkalimullin@gmail.com',
    Icon: EmailIcon,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maxkalimullin/',
    Icon: LinkedInIcon,
  },
  {
    title: 'Github',
    href: 'https://github.com/eldrssn',
    Icon: GithubIcon,
  },
  {
    title: 'Telegram',
    href: 'https://t.me/bdcptr',
    Icon: TelegramIcon,
  },
  {
    title: 'Download CV',
    href: 'https://drive.google.com/file/d/1TfFXEzflXeC236KpZW3beq4hS6E64Bnq/view?usp=sharing',
  },
  {
    title: '+7 (999) 221-64-89',
    href: 'tel:+79992216489',
  },
];

export const languages = [
  {
    title: 'Engish',
    description:
      'Upper-Intermediate - strong reading, writing, and speaking skills',
  },

  {
    title: 'Russian',
    description: 'Native speaker',
  },
];

export const skills = [
  'React',
  'Redux',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'SCSS',
  'Node.js',
  'Github/Gitlab',
  'Material UI',
  'Docker',
  'MobX',
  'Rest API',
  'MongoDB',
  'Pug',
  'Gulp',
  'Figma',
  'Adobe Photoshop',
];

export const portfolio = [
  {
    title: 'Cozy Plant Store | React, Tailwind CSS',
    description:
      "Using React, Typescript, and Tailwind CSS, I've created an engaging and visually appealing platform for plant enthusiasts to explore",
    images: plantStore,
    github: 'https://github.com/eldrssn/plant-shop',
    link: 'https://plant-shop-patch.vercel.app/',
  },
  {
    title: 'Chess | React, SCSS',
    description:
      'This is a game of chess for 2 people. Displays available moves and knocked down pieces.',
    images: chess,
    github: 'https://github.com/eldrssn/chess',
    link: 'https://chess-eldrssn.vercel.app/',
  },
  {
    title: 'Design Promogroup | Pug, SCSS',
    description: 'Personal multi-page website project for a design company',
    images: promogroup,
    github: 'https://github.com/eldrssn/promogroup',
    link: 'https://eldrssn.github.io/promogroup/dist/index.html',
  },
  {
    title: 'Virtual keyboard | Vanilla JS',
    description: 'Simple virtual keyboard written on Vanilla JS',
    images: keyboard,
    github: 'https://github.com/eldrssn/keyboard',
    link: 'https://eldrssn.github.io/keyboard/',
  },
];
