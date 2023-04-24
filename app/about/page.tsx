import Languages from 'components/base/about/Languages';
import Skills from 'components/base/about/Skills';
import About from 'components/base/about/About';
import Contacts from 'components/main/Contacts';

export const metadata = {
  title: 'About',
};

const page = () => (
  <>
    <About />
    <Languages />
    <Skills />
    <Contacts />
  </>
);

export default page;
