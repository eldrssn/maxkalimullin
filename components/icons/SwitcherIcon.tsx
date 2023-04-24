export const SwitcherIcon = () => (
  <svg
    className='h-8 w-8 '
    aria-hidden='true'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    style={{ strokeLinecap: 'round' }}
  >
    <circle
      className='transition transform ease-in-out duration-500 dark:duration-250 dark:scale-175 origin-center fill-slate-950 dark:fill-zinc-400 hover:fill-gray-800 dark:hover:fill-zinc-100 focus-visible:fill-gray-700 focus-visible:dark:hover:fill-zinc-100'
      cx='12'
      cy='12'
      r='6'
      mask='url(#moon-mask)'
      fill='currentColor'
    />
    <g
      className='dark:rotate-m25 transition transform opacity ease-in-out duration-500 dark:opacity-0 origin-center stroke-gray-600 hover:stroke-gray-700 stroke-2 focus-visible:stroke-gray-700'
      stroke='currentColor'
    >
      <line x1='12' y1='1' x2='12' y2='3' />
      <line x1='12' y1='21' x2='12' y2='23' />
      <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
      <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
      <line x1='1' y1='12' x2='3' y2='12' />
      <line x1='21' y1='12' x2='23' y2='12' />
      <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
      <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
    </g>
    <mask className='origin-center' id='moon-mask'>
      <rect x='0' y='0' width='100%' height='100%' fill='white' />
      <circle
        cx='24'
        cy='10'
        r='6'
        fill='black'
        className='dark:translate-x-m7 transition duration-300 ease dark:delay-500 dark:duration-300'
      />
    </mask>
  </svg>
);
