import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const achievements = [
    'Built scalable, responsive web applications with React & modern libraries',
    'Led performance tuning initiatives resulting in 40% faster load times',
    'Collaborated with cross-functional teams to deliver features on time',
    'Mentored junior developers and contributed to code review processes'
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent font-medium text-sm tracking-wide uppercase mb-2 block">
              Experience
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              My Working <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of continuous learning, growth, and delivering exceptional results 
              in the fast-paced world of front-end development.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={fadeInUp}>
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Company Info */}
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-xl text-foreground">
                          Mitrahsoft Solutions
                        </h3>
                        <p className="text-muted-foreground text-sm">Private Limited</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>May 2022 – Present</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Associate Software Developer
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:w-2/3">
                    <h4 className="font-semibold text-lg text-foreground mb-4">
                      Key Achievements & Responsibilities
                    </h4>
                    
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 group"
                        >
                          <ChevronRight className="h-5 w-5 text-primary mt-0.5 group-hover:transform group-hover:translate-x-1 transition-transform duration-200" />
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills Used */}
                    <div className="mt-6">
                      <h5 className="font-medium text-foreground mb-3">Technologies & Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'Git'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};