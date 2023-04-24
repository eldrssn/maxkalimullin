import { FC } from 'react';
import { LanguageProps } from './types';

const Language: FC<LanguageProps> = ({ language: { title, description } }) => (
  <tr key={title}>
    <td className='w-[30%] font-bold align-top'>{title}</td>
    <td>{description}</td>
  </tr>
);

export default Language;
