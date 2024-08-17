import About from '@/components/About';
import Career from '@/components/Career/Career';
import Contacts from '@/components/Contacts/Contacts';
import Gallery from '@/components/Gallery/Gallery';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
