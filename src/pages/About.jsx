import SkillList from '../components/SkillList';
import { useData, useSEO } from '../hooks';

/**
 * About Page - Profile information, experience, education, and skills
 */
const About = () => {
  const { data: profile, loading } = useData('profile');

  // Set SEO meta tags for about page
  useSEO({
    title: 'About Me',
    description: 'Learn more about my background, experience, education, and professional skills in web development and technology.',
    keywords: 'about, experience, skills, education, developer profile',
  });

  if (!profile || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="badge-primary">
              👨‍💻 Who I Am
            </span>
          </div>
          <h1 className="section-title text-5xl mb-4">About Me</h1>
          <p className="section-subtitle mx-auto text-xl">
            Get to know more about my background, skills, and experience
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <img
                src="https://ui-avatars.com/api/?name=Ali+Ashraf&size=600&background=0ea5e9&color=fff&bold=true"
                alt="About me"
                className="rounded-3xl shadow-2xl w-full max-w-md transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=AA&size=600&background=0ea5e9&color=fff&bold=true';
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full -z-10 animate-float"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center animate-fade-in space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {profile.bio}
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-primary-100 rounded-full">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{profile.email}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-accent-100 rounded-full">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{profile.location}</span>
              </div>
            </div>

            {profile.resume && (
              <div className="mt-8">
                <a
                  href={profile.resume}
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Skills
          </h2>
          <SkillList skills={profile.skills} />
        </div>

        {/* Experience Section */}
        {profile.experience && profile.experience.length > 0 && (
          <div className="mb-20 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Work Experience
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow border-l-4 border-primary-600">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="badge-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {profile.education && profile.education.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Education
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {profile.education.map((edu, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow border-l-4 border-accent-600">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <span className="badge-secondary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-accent-600 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
