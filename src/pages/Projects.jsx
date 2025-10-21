import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Projects - My Portfolio';
    
    const loadProjects = async () => {
      try {
        const data = await fetchData('projects');
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Get unique technologies for filtering
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  // Filter projects by technology
  const handleFilter = (tech) => {
    setSelectedTech(tech);
    if (tech === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.technologies.includes(tech)));
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
            <span className="badge-primary">
              💼 Portfolio
            </span>
          </div>
          <h1 className="section-title text-5xl mb-4">My Projects</h1>
          <p className="section-subtitle mx-auto text-xl">
            A collection of projects I&apos;ve worked on, showcasing my skills and expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedTech === tech
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block p-8 bg-gray-50 dark:bg-gray-800 rounded-full mb-6">
              <svg className="w-24 h-24 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No projects found with the selected technology.</p>
            <button 
              onClick={() => handleFilter('All')}
              className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Featured Projects Section */}
        {selectedTech === 'All' && projects.some(p => p.featured) && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(p => p.featured)
                .map((project) => (
                  <div key={project.id} className="animate-fade-in">
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
