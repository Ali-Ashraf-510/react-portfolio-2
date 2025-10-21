import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { fetchData } from '../utils/api';

const Home = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchData('profile');
        setProfile(data);
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    loadProfile();
  }, []);

  return (
    <div>
      <Hero profile={profile} />
      
      {/* About Preview Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              {profile?.bio || 'Loading...'}
            </p>
            <a href="/about" className="btn-primary inline-block">
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100 text-lg">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">8+</div>
              <div className="text-primary-100 text-lg">Certifications</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-primary-100 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
