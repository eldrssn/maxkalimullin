/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import { name } from 'constants/info';
import photo from 'public/photo.jpg';

import { JobIcon } from 'components/icons/JobIcon';
import { LocationIcon } from 'components/icons/LocationIcon';
import { PassportIcon } from 'components/icons/PassportIcon';

const Home = () => (
  <>
    <h1 className='text-[38px] mb-7'>{name}</h1>
    <article className='mb-7'>
      Greetings! I am a highly skilled{' '}
      <span className='font-bold'>Front-End Developer</span> with a 2-year track
      record in developing marketplaces and web apps. I am proficient in React,
      Next.js, and Redux, with expertise in all stages of interface component
      design. I am dedicated to delivering high-quality, web-responsive
      applications while constantly learning and growing in the field.
    </article>
    <div className='flex flex-col mb-5 md:flex-row'>
      <Image
        alt={name}
        className='mb-7 mr-7 rounded-full md:mb-0'
        src={photo}
        placeholder='blur'
        width={150}
        priority
      />
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row items-center gap-2 h-7'>
          <JobIcon />
          <p>Job type: Remote | Relocation</p>
        </div>

        <div className='flex flex-row items-center gap-2 h-7'>
          <LocationIcon />
          <p>Location: Sri Lanka</p>
        </div>

        <div className='flex flex-row items-center gap-2 h-7'>
          <PassportIcon />
          <p>Citizenship: Russia</p>
        </div>
      </div>
    </div>
    <article className='mb-7'>
      If you're interested in me, feel free to write me!
    </article>
  </>
);

export default Home;
