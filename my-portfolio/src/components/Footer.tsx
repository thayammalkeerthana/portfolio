import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary">
              Keerthana
            </h3>
            <p className="text-background/80 leading-relaxed">
              Front-End Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex items-center space-x-1 text-sm text-background/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-background">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-background">Get in Touch</h4>
            <div className="space-y-2 text-background/80">
              <div>
                <span className="block">Email:</span>
                <a 
                  href="mailto:keerthi@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  keerthi@gmail.com
                </a>
              </div>
              <div>
                <span className="block">Phone:</span>
                <a 
                  href="tel:+919361421489" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  +91 9361421489
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-background/70 text-sm">
            © {currentYear} Keerthana. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-background/70 text-sm">Built with modern technologies</span>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Tailwind</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute -top-6 right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};