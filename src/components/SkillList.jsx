const SkillList = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skillCategory, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
            {skillCategory.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillCategory.items.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
