import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
};

export interface IPortfolioItem {
  title: string;
  description: string;
  images: StaticImageData[];
  github: string;
  link: string;
}
