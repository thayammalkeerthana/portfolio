import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
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

  const softSkills = [
    'Communication',
    'Teamwork', 
    'Adaptability',
    'Problem-Solving'
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
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
              About Me
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              Designing Solutions, Not <br />
              <span className="text-primary">Just Visuals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm passionate about creating digital experiences that not only look great 
              but also solve real problems and deliver exceptional user value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
                Front-End Developer with a Passion for Excellence
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a Front-End Developer with <strong>3+ years of experience</strong>, I specialize in 
                creating scalable, user-focused applications using React.js, JavaScript, and modern 
                UI libraries. I believe in writing clean, maintainable code that not only works 
                beautifully but also scales efficiently.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                My journey in web development has taught me that the best applications are built 
                with a deep understanding of user needs, technical excellence, and a collaborative 
                spirit. I'm always eager to learn new technologies and tackle challenging problems.
              </p>

              {/* Education Card */}
              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        B.E. in Computer Engineering
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Unnamalai Institute of Technology (Anna University)
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>2018–2022</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>GPA: 8.1/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills Grid */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
                Core Strengths & Values
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 }
                    }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                          <span className="text-2xl">
                            {index === 0 && '💬'}
                            {index === 1 && '🤝'}
                            {index === 2 && '🔄'}
                            {index === 3 && '🧠'}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill}
                        </h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-poppins font-bold text-3xl text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-3xl text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-3xl text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};