import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
