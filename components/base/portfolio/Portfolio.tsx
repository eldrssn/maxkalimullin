import { portfolio } from 'constants/info';
import { PortfolioItem } from './PortfolioItem';

const Portfolio = () => (
  <>
    <h1 className='text-[38px] mb-7'>Portfolio</h1>

    <div className='flex flex-col flex-wrap w-full pb-32 gap-y-12 gap-x-8 md:flex-row'>
      {portfolio.map((item) => (
        <PortfolioItem item={item} key={item.title} />
      ))}
    </div>
  </>
);

export default Portfolio;
