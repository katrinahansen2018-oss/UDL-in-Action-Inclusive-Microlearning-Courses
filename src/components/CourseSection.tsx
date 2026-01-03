import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  udlElements: string[];
  link: string | null;
}

interface CourseSectionProps {
  course: Course;
}

const CourseSection: React.FC<CourseSectionProps> = ({ course }) => {
  const IconComponent = course.icon;
  
  return (
    <section 
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      role="article"
      aria-labelledby={`${course.id}-title`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
          <IconComponent 
            className="w-6 h-6 text-blue-600" 
            aria-hidden="true"
          />
        </div>
        <h2 
          id={`${course.id}-title`}
          className="text-2xl font-bold text-slate-800 leading-tight"
        >
          {course.title}
        </h2>
      </div>
      
      <p className="text-slate-600 mb-6 leading-relaxed text-lg">
        {course.description}
      </p>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          UDL Elements:
        </h3>
        <ul className="space-y-3" role="list">
          {course.udlElements.map((element, index) => (
            <li key={index} className="flex items-start gap-3">
              <span 
                className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-slate-600 leading-relaxed">
                {element}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {course.link && (
        <div className="mt-auto pt-2">
          <a
            href={course.link}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`Explore details for ${course.title}`}
          >
            Explore Details
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default CourseSection;