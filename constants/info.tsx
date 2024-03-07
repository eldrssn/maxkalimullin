import { EmailIcon } from 'components/icons/EmailIcon';
import { GithubIcon } from 'components/icons/GithubIcon';
import { LinkedInIcon } from 'components/icons/LinkedInIcon';
import { TelegramIcon } from 'components/icons/TelegramIcon';
import plantStore from 'public/plants.jpg';
import plantStoreCart from 'public/cart.png';
import chess from 'public/chess.jpg';
import promogroup from 'public/promogroup1.jpg';
import appleScroll from 'public/apple-scroll.jpg';
import appleScrollGif from 'public/anim.gif';
import glasses from 'public/glasses-main.jpg';
import glassesGif from 'public/glasses.gif';
import inchapin from 'public/inchapic-main.jpg';
import hDates from 'public/h-dates.jpg';
import hDatesGif from 'public/dates.gif';
import { IPortfolioItem } from 'types';

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
    href: 'https://drive.google.com/file/d/1WcdySFOq8dpybtAEgHrx7uTEiIJtBnyl/view?usp=sharing',
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

export const portfolio: IPortfolioItem[] = [
  {
    title: 'Cozy Plant Store | Next.js, Tailwind CSS, MobX, MongoDB',
    description:
      'Featuring a welcoming home page, organized catalog, detailed product cards, and convenient shopping basket, the platform offers a user-friendly experience with attractive plant images and efficient navigation.',
    images: [plantStore, plantStoreCart],
    github: 'https://github.com/eldrssn/plant-shop-next',
    link: 'https://plant-shop-next.vercel.app/',
  },
  {
    title: 'React + GSAP scroll triggered animation',
    description:
      'The project is built using React, TypeScript, GSAP and the Locomotive Scroll library to control the scroll animation.',
    images: [appleScroll, appleScrollGif],
    github: 'https://github.com/eldrssn/airpods-scroll-trigger',
    link: 'https://airpods-scroll-trigger.vercel.app/',
  },
  {
    title: 'Interactive calendar | React, SCSS, GSAP and Swiper',
    description:
      'Showcasing historical events featuring GSAP animations for creative element transitions. The site allows users to explore key historical dates and events with a scrollable event block.',
    images: [hDates, hDatesGif],
    github: 'https://github.com/eldrssn/historical-dates',
    link: 'https://historical-dates-indol.vercel.app/',
  },
  {
    title: 'Real Estate presentation | Adaptive layout + Pixel Perfect',
    description:
      "Creating on Figma's layout a property presentation, with Adaptive layout and Pixel Perfect",
    images: [inchapin],
    github: 'https://github.com/eldrssn/inchapin',
    link: 'https://inchapin-blush.vercel.app/',
  },
  {
    title: 'Landing page with parallax scroll | Next.js, Framer Motion',
    description:
      'Created a site with parallax scroll and animation using React, Next.js and Framer Motion',
    images: [glasses, glassesGif],
    github: 'https://github.com/eldrssn/glasses-store',
    link: 'https://glasses-store-rust.vercel.app/',
  },
  {
    title: 'Chess | React, SCSS',
    description:
      'This is a game of chess for 2 people. Displays available moves and knocked down pieces.',
    images: [chess],
    github: 'https://github.com/eldrssn/chess',
    link: 'https://chess-eldrssn.vercel.app/',
  },
  {
    title: 'Design Promogroup | Pug, SCSS',
    description: 'Personal multi-page website project for a design company',
    images: [promogroup],
    github: 'https://github.com/eldrssn/promogroup',
    link: 'https://eldrssn.github.io/promogroup/dist/index.html',
  },
];
