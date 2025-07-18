import { Code2, Users, Lightbulb, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Programming Languages", skills: ["Python", "Java", "C", "C++", "SQL"] },
    { name: "Data Analytics Tools", skills: ["Pandas", "Matplotlib", "Yahoo Finance API"] },
    { name: "Data Visualization", skills: ["Charts", "Graphs", "Dashboards using Python"] },
    { name: "API Integration", skills: ["Financial APIs", "REST API Handling"] },
  ];

  const professionalSkills = [
    "Leadership & Event Management",
    "Digital Marketing Strategies",
    "Negotiation & Critical Thinking",
    "Team Collaboration & Creative Ideation",
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-gray-900">
            Skill Summary
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-600 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-500" />
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Professional Skills
                </h3>
              </div>

              <div className="space-y-4">
                {professionalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Achievements Section */}
              <div className="mt-8 pt-6 border-t border-blue-100">
                <h4 className="font-semibold text-gray-600 mb-4">Key Achievements</h4>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      Spearheaded real-world math events as Math Club lead, promoting practical applications
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      Engineered an intelligent fuzzy logic system for adaptive vehicle control
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      Built end-to-end stock analysis dashboards for actionable data insights
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
