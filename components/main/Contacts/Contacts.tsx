import { contacts } from 'constants/info';
import Contact from './Contact';

const Contacts = () => (
  <section className='flex flex-row flex-wrap gap-5 pb-3'>
    {contacts.map((contact) => (
      <Contact key={contact.title} contact={contact} />
    ))}
  </section>
);

export default Contacts;
