import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Certificates - My Portfolio';
    
    const loadCertificates = async () => {
      try {
        const data = await fetchData('certificates');
        setCertificates(data);
        setFilteredCertificates(data);
      } catch (error) {
        console.error('Error loading certificates:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCertificates();
  }, []);

  // Get unique categories for filtering
  const allCategories = ['All', ...new Set(certificates.map(c => c.category))];

  // Filter certificates by category
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredCertificates(certificates);
    } else {
      setFilteredCertificates(certificates.filter(c => c.category === category));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="badge-secondary">
              🏆 Achievements
            </span>
          </div>
          <h1 className="section-title text-5xl mb-4">Certifications & Achievements</h1>
          <p className="section-subtitle mx-auto text-xl">
            Professional certifications and courses completed to enhance my skills and knowledge
          </p>
        </div>

        {/* Stats Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 rounded-2xl p-8 mb-12 text-white animate-fade-in shadow-2xl">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="group cursor-default">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">{certificates.length}</div>
              <div className="text-primary-100 font-medium">Total Certificates</div>
            </div>
            <div className="group cursor-default">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">{allCategories.length - 1}</div>
              <div className="text-primary-100 font-medium">Categories</div>
            </div>
            <div className="group cursor-default">
              <div className="text-5xl font-bold mb-2 transform group-hover:scale-110 transition-transform">
                {new Date().getFullYear() - 2020}+
              </div>
              <div className="text-primary-100 font-medium">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate, index) => (
              <div 
                key={certificate.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block p-8 bg-gray-50 dark:bg-gray-800 rounded-full mb-6">
              <svg className="w-24 h-24 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No certificates found in this category.</p>
            <button 
              onClick={() => handleFilter('All')}
              className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline"
            >
              View all certificates
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl p-12 animate-fade-in shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 dark:bg-accent-900 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="relative">
            <div className="inline-block mb-4">
              <span className="text-5xl">📚</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always looking to expand my knowledge and stay updated with the latest technologies.
              These certifications represent my commitment to professional growth and excellence.
            </p>
            <a href="/contact" className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Let&apos;s Work Together →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
