import { skills } from 'constants/info';

const Skills = () => (
  <article className='mb-10'>
    <h2 className='text-[38px] mb-7'>Skills</h2>
    <div className='flex flex-row flex-wrap gap-4'>
      {skills.map((skill) => (
        <p
          className='px-2 py-1 font-medium text-black bg-neutral-300 dark:bg-gray-300 rounded-lg border-neutral-800 border dark:border-gray-300'
          key={skill}
        >
          {skill}
        </p>
      ))}
      <p className='px-2 py-1 font-medium rounded-lg bg-neutral-600 text-white dark:bg-neutral-700'>
        Other Coming Very Soon
      </p>
    </div>
  </article>
);

export default Skills;
