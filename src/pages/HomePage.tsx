import { useNavigate } from 'react-router-dom';
import { Container, Footer, Header, Section } from '../components';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Section title="This is a welcome page">
        <div className="min-h-screen flex items-center justify-center text-white">
          <div className="p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-3xl font-bold  mb-4">
              Welcome to WeatherApp
            </h1>
            <p className="text-white mb-6">
              Discover the latest weather updates at your fingertips. Whether
              you're planning your day or just curious about the current weather
              conditions, WeatherWise has got you covered. Stay informed with
              accurate and up-to-date weather information tailored just for you.
            </p>
            <button
              onClick={() => navigate('/main')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </Section>
      <Footer />
    </Container>
  );
};
