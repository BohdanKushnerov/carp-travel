import About from '@/components/About/About';
import Career from '@/components/Career/Career';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
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
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default Home;
