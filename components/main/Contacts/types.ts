import { ReactElement } from 'react';

export type ContactProps = {
  contact: {
    title: string;
    href: string;
    Icon?: () => ReactElement;
  };
};
