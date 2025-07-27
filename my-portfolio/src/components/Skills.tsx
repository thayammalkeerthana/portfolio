import { motion } from 'framer-motion';
import { Code2, Palette, Database, TestTube, Users, Lightbulb, MessageSquare, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['React.js', 'Redux', 'Redux Thunk', 'Context API', 'JavaScript (ES6)', 'TypeScript'],
      color: 'text-blue-500'
    },
    {
      title: 'UI/UX & Styling',
      icon: Palette,
      skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap', 'Responsive Design'],
      color: 'text-pink-500'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs'],
      color: 'text-green-500'
    },
    {
      title: 'Testing & Tools',
      icon: TestTube,
      skills: ['Playwright.js', 'Git', 'GitHub', 'Postman', 'Vercel', 'Netlify'],
      color: 'text-purple-500'
    }
  ];

  const softSkills = [
    { name: 'Teamwork', icon: Users, description: 'Collaborative problem-solving' },
    { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical thinking' },
    { name: 'Communication', icon: MessageSquare, description: 'Clear & effective' },
    { name: 'Adaptability', icon: Zap, description: 'Quick learning & flexibility' }
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
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
            <span className="text-accent font-medium text-sm tracking-wide uppercase mb-2 block">
              Skills & Expertise
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              My <span className="text-primary">Technical</span> Arsenal
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning 
              in modern web development technologies.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={{
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <category.icon className={`h-5 w-5 ${category.color}`} />
                        </div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Soft Skills & Personal Strengths
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 }
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="text-center border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-portfolio rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};