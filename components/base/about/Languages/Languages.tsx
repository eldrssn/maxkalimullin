import Language from './Language';
import { languages } from 'constants/info';

const Languages = () => (
  <article className='space-y-7 mb-7'>
    <h2 className='text-[38px]'>Languages</h2>
    <table className='border-separate border-spacing-y-2'>
      <tbody>
        {languages.map((language) => (
          <Language key={language.title} language={language} />
        ))}
      </tbody>
    </table>
  </article>
);

export default Languages;
