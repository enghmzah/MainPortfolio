import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import project images
import portfolioImg from '../assets/project-portfolio.jpg';
import restaurant1Img from '../assets/project-restaurant1.jpg';
import restaurant2Img from '../assets/project-restaurant2.jpg';
import fixCleanImg from '../assets/project-fixclean.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'My Portfolio Website',
      description: 'A professional personal website showcasing my projects, skills, and contact links. Features responsive design, smooth animations, and direct email contact form.',
      image: portfolioImg,
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'EmailJS'],
      category: 'react',
      liveUrl: 'https://ahmed-alaa-portfolio.vercel.app',
      githubUrl: 'https://github.com/ahmed-alaa/portfolio',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant App – Elegant Dining',
      description: 'Modern restaurant website with dynamic menu, image gallery, and table reservation system. Responsive design optimized for both mobile and desktop.',
      image: restaurant1Img,
      technologies: ['React', 'CSS Modules', 'AOS.js'],
      category: 'react',
      liveUrl: 'https://elegant-restaurant-app.vercel.app',
      githubUrl: 'https://github.com/ahmed-alaa/restaurant-elegant',
      featured: false
    },
    {
      id: 3,
      title: 'Pizza Palace – Fast Food',
      description: 'Fast food restaurant website with attractive design, animated promotions, contact form, and integrated Google Maps. Simple and fast interface.',
      image: restaurant2Img,
      technologies: ['React', 'Bootstrap', 'EmailJS'],
      category: 'react',
      liveUrl: 'https://pizza-palace-app.vercel.app',
      githubUrl: 'https://github.com/ahmed-alaa/pizza-palace',
      featured: false
    },
    {
      id: 4,
      title: 'Fix & Clean – Home Services',
      description: 'Home cleaning and repair services website featuring service categories, pricing, customer reviews, and quick booking form.',
      image: fixCleanImg,
      technologies: ['React', 'TailwindCSS', 'Formik'],
      category: 'react',
      liveUrl: 'https://fix-clean-services.vercel.app',
      githubUrl: 'https://github.com/ahmed-alaa/fix-clean',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'react', label: 'React', count: projects.filter(p => p.category === 'react').length },
    { id: 'node', label: 'Node.js', count: projects.filter(p => p.category === 'node').length },
    { id: 'mongo', label: 'MongoDB', count: projects.filter(p => p.category === 'mongo').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <Button
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-black/50 border-white/50 text-white hover:bg-black/70"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

