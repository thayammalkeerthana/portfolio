import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: 'High-Performance Reporting App',
      description: 'Built a sophisticated reporting application using React and TypeScript. Implemented virtualization techniques to efficiently render nested JSON data and provide seamless export functionality.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js'],
      category: 'Professional',
      achievements: [
        'Implemented data virtualization for handling large datasets',
        'Built custom export functionality for multiple formats',
        'Achieved 99.9% uptime with optimized performance'
      ]
    },
    {
      title: 'Conference Management Platform',
      description: 'Developed a comprehensive conference management system handling both academic and enterprise events with integrated e-commerce capabilities.',
      tech: ['React', 'Redux', 'Ant Design', 'Express.js'],
      category: 'Professional',
      achievements: [
        'Managed registration for 1000+ attendees',
        'Integrated payment gateway and e-commerce features',
        'Built admin dashboard for event management'
      ]
    },
    {
      title: 'Weight Loss Community App',
      description: 'Created a social platform for weight loss community with React Native mobile app and comprehensive admin panel for community management.',
      tech: ['React', 'React Native', 'Redux Thunk', 'MongoDB'],
      category: 'Professional',
      achievements: [
        'Built cross-platform mobile application',
        'Implemented social features and community engagement',
        'Developed admin panel for content moderation'
      ]
    },
    {
      title: 'E2E Testing Automation Suite',
      description: 'Designed and implemented comprehensive end-to-end testing framework using TypeScript and Playwright for high reliability across multiple platforms.',
      tech: ['TypeScript', 'Playwright', 'CI/CD', 'Testing'],
      category: 'Professional',
      achievements: [
        'Achieved 95% test coverage across platforms',
        'Reduced manual testing time by 70%',
        'Integrated with CI/CD pipeline for automated testing'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS featuring dark/light mode, smooth animations, and optimal performance.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      category: 'Personal',
      link: '#',
      achievements: [
        'Achieved 100% Lighthouse performance score',
        'Implemented smooth animations and transitions',
        'Fully responsive across all devices'
      ]
    },
    {
      title: 'Smart Todo Application',
      description: 'Feature-rich todo application with React Hooks, local storage persistence, and intuitive user interface for task management.',
      tech: ['React', 'Hooks', 'LocalStorage', 'CSS3'],
      category: 'Personal',
      achievements: [
        'Implemented drag-and-drop functionality',
        'Added data persistence with local storage',
        'Built with modern React patterns and hooks'
      ]
    }
  ];

  const professionalProjects = projects.filter(p => p.category === 'Professional');
  const personalProjects = projects.filter(p => p.category === 'Personal');

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
     initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 }
      }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card className={`h-full border transition-all duration-300 hover:shadow-xl border-border/50 hover:border-primary/20`}>
        <CardContent className="p-6">          
          <h3 className="font-poppins font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="font-medium text-foreground mb-2 text-sm">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <ArrowRight className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4 border-t border-border/50">
            {project.link && (
              <Button variant="outline" size="sm" className="flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
            <Button variant="outline" size="sm" className="flex-1">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of professional and personal projects showcasing my expertise 
              in modern web development and problem-solving capabilities.
            </p>
          </motion.div>

          {/* Professional Projects */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Professional Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Personal Projects */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Personal Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <div className="bg-gradient-portfolio rounded-2xl p-8 text-white">
              <h3 className="font-poppins font-semibold text-2xl mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                I'm always excited to take on new challenges and create amazing digital experiences.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-medium"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};