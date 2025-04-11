import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageModal } from '../components/ImageModal';

interface Project {
  title: string;
  overview: string;
  technologies: string[];
  images?: string[];
}

export default function Portfolio() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Manufacturing Process Analyzer",
      overview: "A Java-based application designed to streamline and optimize manufacturing processes through data analysis and reporting. Features comprehensive data management, process control, and statistical analysis capabilities.",
      technologies: ["Java", "SQL", "Object-Oriented Programming", "Statistical Analysis"],
      images: ["manufacturingProcessAnalyzer.png"]
    },
    {
      title: "Superset Analytics Project",
      overview: "A data analytics platform using Apache Superset, focusing on reusable data layer visualization, data connectivity, and deployable dashboards.",
      technologies: ["Apache Superset", "Docker", "Python", "SQL", "RESTful APIs"]
    },
    {
      title: "Metrology Tools Project",
      overview: "A lightweight web application enhancing team collaboration through Holiday Helper, PI Planner, and RD Test Mode tools. Built for efficient resource management and planning.",
      technologies: ["ASP.NET Core", "JavaScript", "HTML", "CSS", "RESTful APIs"],
      images: ["MetrologyTools.png"]
    },
    {
      title: "Software Update System",
      overview: "A framework for performing non-disruptive software updates across interconnected processes in complex systems where continuous operation is critical.",
      technologies: ["Python", "Flask", "PyYAML", "Pytest", "Multiprocessing"]
    },
    {
      title: "Product Report Integration System",
      overview: "A centralized system for generating, managing, and distributing product reports, integrating Python and PowerShell scripts for automated data processing.",
      technologies: ["Python", "PowerShell", "Jinja2", "JSON", "Matplotlib"],
      images: ["ProductReportIntegration_SecurityStatusDashboard.png", "ProductReportIntegration_security_status_pie.png"]
    },
    {
      title: "System Dynamics Simulator",
      overview: "A real-time system dynamics visualization and monitoring dashboard for high-precision manufacturing environments, demonstrating complex system interactions.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      images: ["systemDynamicsSimulator.png", "SystemDynamicsSimulator2.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-brand-black mb-8">
          {language === 'en' ? 'Portfolio' : 'Portfolio'}
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          {language === 'en' 
            ? 'A showcase of my technical projects and contributions to software development.'
            : 'Een showcase van mijn technische projecten en bijdragen aan softwareontwikkeling.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {project.images && project.images.length > 0 && (
                <div className="relative bg-gray-100 p-4 flex justify-center">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="max-h-[400px] w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(project.images![0])}
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-brand-black mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.overview}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.images && project.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {project.images.slice(1).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative bg-gray-100 p-2 rounded flex justify-center">
                        <img
                          src={image}
                          alt={`${project.title} additional view ${imgIndex + 1}`}
                          className="max-h-[200px] w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setSelectedImage(image)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Project Preview"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}