import { portfolio } from 'constants/info';
import Image from 'next/image';

const Portfolio = () => (
  <>
    <h1 className='text-[38px] mb-7'>Portfolio</h1>

    <div className='flex flex-col flex-wrap w-full pb-32 gap-y-12 gap-x-8 md:flex-row'>
      {portfolio.map(({ title, description, images, link }) => (
        <a
          href={link}
          target='_blank'
          key={title}
          className='group overflow-hidden transition-all relative duration-300 pb-4 rounded-2xl border-neutral-800 border-spacing-2 hover:scale-105 md:basis-[47%] hover:shadow-lg hover:dark:shadow-cyan-500/50'
        >
          <div className='relative w-full h-64 mb-4'>
            <Image
              src={images}
              fill={true}
              alt={title}
              className='object-cover'
            />
          </div>

          <h3 className='mx-4 mb-2 text-xl font-medium'>{title}</h3>
          <p className='mx-4 text-sm opacity-70 group-hover:opacity-100'>
            {description}
          </p>
        </a>
      ))}
    </div>
  </>
);

export default Portfolio;
