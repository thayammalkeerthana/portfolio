import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thayammalkeerthana@gmail.com',
      href: 'mailto:thayammalkeerthana@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9361421489',
      href: 'tel:+919361421489',
      color: 'text-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/keerthana',
      href: 'https://www.linkedin.com/in/thayammalkeerthana/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/keerthana',
      href: 'https://github.com/thayammalkeerthana',
      color: 'text-gray-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     toast({
  //       title: "Message Sent Successfully!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
      
  //     setFormData({ name: '', email: '', message: '' });
  //     setIsSubmitting(false);
  //   }, 1500);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!formRef.current) return;

  emailjs
    .sendForm(
      'service_g98d4gp',      // EmailJS service ID
      'template_28xe19m',     // EmailJS template ID
      formRef.current,
      {
        publicKey: 'm9PbzTjh9c5GS1lUT', // EmailJS public key
      }
    )
    .then(
      () => {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: "Message Failed!",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        console.error('FAILED...', error.text);
        setIsSubmitting(false);
      }
    );
};


  return (
    <section id="contact" className="py-20 bg-section-bg">
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
              Get In Touch
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              Let's Start a <span className="text-primary">Conversation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, answer questions, 
              or just have a friendly chat about technology and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-2xl text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, need technical consultation, 
                  or want to explore collaboration opportunities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-4">
                        <a
                          href={info.href}
                          className="flex items-center space-x-4 group"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <info.icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                              {info.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Info */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 p-6 bg-gradient-portfolio rounded-xl text-white"
              >
                <h4 className="font-semibold text-lg mb-2">Quick Info</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Available for freelance work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Open to remote opportunities</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or question..."
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center">
                      Usually respond within 24 hours ⚡
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};