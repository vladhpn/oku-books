import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Twitter from './components/Twitter';
import Team from './components/Team/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Blog />
        <Twitter />
        <Team />
        <Footer />
      </Container>
    </>
  );
}

export default App;
