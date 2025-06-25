import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  GitBranch, 
  Globe,
  Smartphone,
  Server,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      skills: [
        { name: 'React', level: 90, description: 'Component-based UI development' },
        { name: 'JavaScript (ES6+)', level: 85, description: 'Modern JavaScript features' },
        { name: 'TailwindCSS', level: 88, description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', level: 75, description: 'Animation and interactions' },
        { name: 'Bootstrap', level: 80, description: 'Responsive design framework' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 82, description: 'Web application framework' },
        { name: 'MongoDB', level: 78, description: 'NoSQL database management' },
        { name: 'REST APIs', level: 88, description: 'RESTful web services' },
        { name: 'EmailJS', level: 70, description: 'Email integration service' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 85, description: 'Version control system' },
        { name: 'VS Code', level: 90, description: 'Code editor and IDE' },
        { name: 'Postman', level: 75, description: 'API testing and development' },
        { name: 'Figma', level: 65, description: 'UI/UX design tool' },
        { name: 'Chrome DevTools', level: 80, description: 'Web debugging and optimization' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white mb-4`}>
              {React.createElement(skillCategories[activeCategory].icon, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {skillCategories[activeCategory].title}
            </h3>
          </motion.div>

          <div className="grid gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="text-2xl font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development. 
              My goal is to deliver cutting-edge solutions that exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

