import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import ahmedAvatar from '../assets/ahmed-avatar.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TailwindCSS, Framer Motion'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB'
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web applications'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative z-10">
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-background rounded-2xl p-4">
                    <img
                      src={ahmedAvatar}
                      alt="Ahmed Alaa"
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-2xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ahmed Alaa - Fullstack Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm passionate about building modern web applications with high performance 
                  and elegant design. With expertise in the MERN Stack, I focus on creating 
                  scalable solutions that solve real-world problems.
                </p>
                
                <p>
                  My journey in web development started with a curiosity about how things work 
                  on the internet. Today, I specialize in both frontend and backend development, 
                  ensuring seamless user experiences from concept to deployment.
                </p>
                
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Tech Stack Preference */}
            <motion.div
              className="bg-muted/30 rounded-xl p-6 border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                💜 My Favorite Tech Stack
              </h4>
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">MERN Stack</strong> - I love this combination 
                because it allows me to use JavaScript throughout the entire development process, 
                from database operations to user interfaces. The ecosystem is rich, the community 
                is supportive, and the possibilities are endless.
              </p>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="text-center p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

