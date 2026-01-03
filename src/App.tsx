import React from 'react';
import Header from './components/Header';
import CourseSection from './components/CourseSection';
import BackToPortfolio from './components/BackToPortfolio';
import { Shield, Clock, Lightbulb } from 'lucide-react';

const courses = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Awareness',
    icon: Shield,
    description: 'This interactive module builds digital vigilance with scenario-driven practice.',
    udlElements: [
      'Multiple representation through high-contrast visuals and clear layouts',
      'Engagement via realistic contexts and interactive scenarios',
      'Action/expression support with keyboard navigation per WCAG 2.2',
      'Supports diverse needs for developing safer online habits'
    ],
    link: 'https://www.kate-hansen.com/project/cybersecurity'
  },
  {
    id: 'time-management',
    title: 'Time Management Strategies',
    icon: Clock,
    description: 'Developed in Articulate Storyline with Figma visuals, this self-paced course teaches task prioritization and scheduling.',
    udlElements: [
      'Representation through custom visuals and multiple content formats',
      'Engagement via scenario-based activities and real-world applications',
      'Action/expression with flexible pacing and multiple response options',
      'Enhances productivity and well-being for adult learners'
    ],
    link: 'https://www.kate-hansen.com/project/time-management'
  },
  {
    id: 'brightspace',
    title: 'D2L Brightspace Essentials',
    icon: Lightbulb,
    description: 'Built in Articulate Rise and Storyline, this course empowers LMS navigation with hands-on tasks.',
    udlElements: [
      'Representation via clear scenario instructions and visual guides',
      'Engagement through authentic practice and real-world contexts',
      'Action/expression with self-paced exploration and multiple pathways',
      'Builds digital literacy for inclusive, independent learning'
    ],
    link: 'https://www.kate-hansen.com/project/brightspace'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseSection key={course.id} course={course} />
          ))}
        </div>
        
        <BackToPortfolio />
      </main>
    </div>
  );
}

export default App;