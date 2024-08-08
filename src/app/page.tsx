import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
};

export default Home;
