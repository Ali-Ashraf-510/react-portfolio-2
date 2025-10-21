import Hero from '../components/Hero';
import { useData, useSEO } from '../hooks';

/**
 * Home Page - Landing page with hero section, bio preview, and quick stats
 */
const Home = () => {
  const { data: profile } = useData('profile');

  // Set SEO meta tags for home page
  useSEO({
    title: 'Home',
    description: 'Welcome to my professional portfolio. Explore my projects, experience, and certifications.',
    keywords: 'portfolio, web developer, projects, experience, skills',
  });

  return (
    <div>
      <Hero profile={profile} />
      
      {/* About Preview Section */}
      <section id="about" className="py-20 bg-white">
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
