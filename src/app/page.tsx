import About from '@/components/About/About';
import Career from '@/components/Career/Career';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import Contacts from '@/components/Contacts/Contacts';
import Gallery from '@/components/Gallery/Gallery';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
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
        <ScrollTopButton />
      </main>
    </>
  );
};

export default Home;
