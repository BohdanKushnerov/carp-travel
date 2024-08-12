import About from '@/components/About';
import Career from '@/components/Career/Career';
import Gallery from '@/components/Gallery';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative">
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Services /> */}
        <Career />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
