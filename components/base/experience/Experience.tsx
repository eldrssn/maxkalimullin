/* eslint-disable react/no-unescaped-entities */
const Experience = () => (
  <div className='space-y-5 mb-7'>
    <h1 className='text-[38px]'>Experience</h1>

    <article className='flex flex-col pb-6 md:flex-row'>
      <div className='text-[14px] mb-5 md:w-[60%] md:pr-2 gap-y-1 flex flex-col'>
        <h2 className='text-[24px] font-medium'>Upwork</h2>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Global freelancing platform for remote work
        </p>
        <p className='font-medium'>Freelance Software Engineer</p>
        <p>Mar 2023 - Present</p>
      </div>
      <div className='ml-5 space-y-4'>
        <ul role='list' className='list-disc marker:text-neutral-400'>
          <li>
            Working as a freelancer on the Upwork platform, specializing in
            React application development.
          </li>
          <li>
            Established long-term working relationships with several clients,
            indicating high satisfaction and trust in my services.
          </li>
          <li>
            Developing and maintaining user interfaces, ensuring high
            performance and accessibility.
          </li>
          <li>
            Continuously improving my knowledge and skills by studying new
            technologies and development practices to remain a sought-after
            professional.
          </li>
        </ul>
      </div>
    </article>

    <article className='flex flex-col mb-6 md:flex-row'>
      <div className='text-[14px] mb-5 md:w-[60%] md:pr-2 gap-y-1 flex flex-col'>
        <h2 className='text-[24px] font-medium'>MediaSoft</h2>
        <p className='text-neutral-600 dark:text-neutral-400'>
          1st in Ruward outsource production rating, 6th in the web
          developers/integrators rating, and 14th in Tagline mobile developers
          rating. 250+ backend, frontend, mobile, and qa experts.
        </p>
        <p className='font-medium'>Frontend Developer</p>
        <p>Saint Petersburg, RU</p>
        <p>Nov 2021 - Mar 2023</p>
      </div>

      <div className='ml-5 space-y-4'>
        <h5 className='font-medium'>Development</h5>
        <ul role='list' className='list-disc marker:text-neutral-400'>
          <li>
            Developed a web application using React, Redux, and Next.js from
            scratch, delivering a fully functional and user-friendly interface
            to the client.
          </li>
          <li>
            Conducted regular code reviews and refactored existing codebase to
            ensure code quality and maintainability.
          </li>
          <li>
            Provided technical guidance and support to team members, resolving
            complex technical issues and improving team productivity.
          </li>
          <li>
            Actively participated in agile development practices, including
            daily stand-up meetings, sprint retrospectives, and backlog grooming
            sessions.
          </li>
          <li>
            Implemented accessibility best practices to ensure that all users
            could use the application with ease.
          </li>
        </ul>

        <h5 className='font-medium'>Collaboration & Technical Support</h5>
        <ul role='list' className='list-disc marker:text-neutral-400'>
          <li>
            Collaborated with a team of developers and designers to ensure
            seamless integration of new features and design changes.
          </li>
          <li>
            Interacted with business owners directly to gather requirements and
            provide technical solutions to meet their needs.
          </li>
          <li>
            Collaborated with Quality Assurance (QA) team to identify and
            resolve issues and ensure high-quality deliverables.
          </li>
          <li>
            Researched and evaluated new technologies and software solutions to
            improve system performance and functionality.
          </li>
        </ul>
      </div>
    </article>

    <h2 className='text-[38px]'>Courses</h2>
    <article className='flex flex-col md:flex-row'>
      <div className='text-[14px] mb-5 md:w-[30%] md:pr-2'>
        <h2 className='text-[24px] font-medium'>HTML Academy</h2>
        <p>Saint Petersburg, RU</p>
        <p>2021</p>
      </div>

      <div>
        <p>
          <span className='font-bold'>JavaScript.</span> Professional
          development of web interfaces
        </p>
      </div>
    </article>

    <h2 className='text-[38px]'>Education</h2>
    <article className='flex flex-col md:flex-row'>
      <div className='text-[14px] mb-5 md:w-[30%] md:pr-2'>
        <h2 className='text-[24px] font-medium leading-7'>
          Ural State University of Economics
        </h2>
        <p>Ekaterinburg, RU</p>
        <p>2012-2016</p>
      </div>

      <div>
        <p className='font-bold'>
          Public Relations, Advertising, and Applied Communication
        </p>
        <p>Bachelor's degree</p>
      </div>
    </article>
  </div>
);

export default Experience;
