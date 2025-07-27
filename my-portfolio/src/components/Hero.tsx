import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import keerthanaProfile from '@/assets/keerthana-profile.jpg';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-portfolio"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 xl:px-20 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm lg:text-base xl:text-lg font-medium mb-4">
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight"
            >
              Keerthana
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-inter text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 text-white/90"
            >
              Front-End Developer | React Specialist
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="font-inter text-lg lg:text-xl xl:text-2xl text-white/80 mb-8 max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed"
            >
              Frontend Developer crafting blazing-fast, responsive web apps with React and clean, scalable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 xl:gap-6 mb-8"
            >
              <Button
                size="lg"
                className="bg-white text-primary font-medium px-8"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground font-medium px-8 transition-colors"
                onClick={()=>window.open('/keerthana_resume.pdf', '_blank')}
              >
                <Eye className="mr-2 h-4 w-4 text-foreground" />
                Preview CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex space-x-4"
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"
              onClick={() => window.open("https://github.com/thayammalkeerthana", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"
              onClick={() => window.open("https://www.linkedin.com/in/thayammalkeerthana", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <a href="mailto:thayammalkeerthana@gmail.com">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center mt-10 sm:mt-20 md:mt-25 lg:mt-0"
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
              >
                <img
                  src={keerthanaProfile}
                  alt="Keerthana"
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};