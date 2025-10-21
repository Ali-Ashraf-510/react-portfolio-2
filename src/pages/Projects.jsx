import { useState, useCallback, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useData, useSEO } from '../hooks';

/**
 * Projects Page - Display and filter projects by technology
 */
const Projects = () => {
  const { data: projects = [], loading } = useData('projects');
  const [selectedTech, setSelectedTech] = useState('All');

  // Set SEO meta tags for projects page
  useSEO({
    title: 'Projects',
    description: 'Explore my portfolio projects. View detailed case studies, technologies used, and live demos of my web development work.',
    keywords: 'projects, portfolio, case studies, web development, applications',
  });

  // Memoize unique technologies to avoid recalculation on every render
  const allTechnologies = useMemo(
    () => {
      if (!projects || projects.length === 0) return ['All'];
      return ['All', ...new Set(projects.flatMap(p => p.technologies))];
    },
    [projects]
  );

  // Memoize filtered projects to avoid recalculation on every render
  const filteredProjects = useMemo(
    () => {
      if (!projects) return [];
      return selectedTech === 'All' 
        ? projects 
        : projects.filter(p => p.technologies.includes(selectedTech));
    },
    [projects, selectedTech]
  );

  // Memoize filter handler to prevent recreation on every render
  const handleFilter = useCallback((tech) => {
    setSelectedTech(tech);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
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
            <div className="inline-block p-8 bg-gray-50 rounded-full mb-6">
              <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-medium">No projects found with the selected technology.</p>
            <button 
              onClick={() => handleFilter('All')}
              className="mt-4 text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Featured Projects Section */}
        {selectedTech === 'All' && projects.some(p => p.featured) && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
