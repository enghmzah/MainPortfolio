import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const experiences = [
    {
      id: 1,
      title: 'Fullstack Developer',
      company: 'TechSolutions Inc.',
      location: 'Remote',
      period: 'Jan 2023 - Present',
      type: 'Full-time',
      description: 'Leading the development of modern web applications using MERN stack. Responsible for both frontend and backend development, ensuring high performance and scalability.',
      achievements: [
        'Developed and deployed 5+ production-ready web applications',
        'Improved application performance by 40% through code optimization',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebCraft Agency',
      location: 'Cairo, Egypt',
      period: 'Jun 2022 - Dec 2022',
      type: 'Contract',
      description: 'Specialized in creating responsive and interactive user interfaces for various client projects. Focused on modern design principles and user experience optimization.',
      achievements: [
        'Built 10+ responsive websites for different industries',
        'Implemented modern UI/UX designs with smooth animations',
        'Reduced page load times by 35% through optimization techniques',
        'Maintained 98% client satisfaction rate'
      ],
      technologies: ['React', 'JavaScript', 'Bootstrap', 'CSS3', 'HTML5']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Alexandria, Egypt',
      period: 'Jan 2022 - May 2022',
      type: 'Internship',
      description: 'Started my professional journey as a web developer, working on various small to medium-sized projects. Gained hands-on experience with modern web technologies.',
      achievements: [
        'Successfully completed 3 client projects during internship',
        'Learned and applied MERN stack development',
        'Contributed to team projects and collaborative development',
        'Received excellent feedback from supervisors and clients'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 4,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'Sep 2021 - Dec 2021',
      type: 'Freelance',
      description: 'Started freelancing to build my portfolio and gain real-world experience. Worked with local businesses to create their online presence.',
      achievements: [
        'Completed 8+ freelance projects successfully',
        'Built strong relationships with local business owners',
        'Developed skills in client communication and project management',
        'Established foundation for professional web development career'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery']
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-background hidden md:block" />

                {/* Experience Card */}
                <motion.div
                  className="md:ml-20 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {experience.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(experience.id)}
                      className="w-full justify-between text-muted-foreground hover:text-foreground"
                    >
                      <span>
                        {expandedItem === experience.id ? 'Hide' : 'Show'} Key Achievements
                      </span>
                      {expandedItem === experience.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedItem === experience.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-border/50"
                        >
                          <h4 className="font-semibold text-foreground mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Ready to Add Value to Your Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's talk about how I can contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  // In a real implementation, this would download the actual CV
                  alert('CV download functionality would be implemented here');
                }}
              >
                Download CV
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

