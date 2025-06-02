import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 200 },
    },
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 justify-between max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Description */}
          <motion.div className="flex-1" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4">Let's work together</h3>
            <p className="text-slate-300 leading-relaxed">
              Whether you have a project in mind, need technical consultation, or just want to 
              say hello, I'd love to hear from you. I'm currently available for new opportunities 
              and always open to interesting conversations.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-start gap-4 flex-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                rotate: 360,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="text-white" size={24} />
            </motion.div>
            <div>
              <div className="text-white font-semibold">Location</div>
              <div className="text-slate-300 text-sm">India, IN</div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-start gap-4 flex-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                rotate: 360,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="text-white" size={24} />
            </motion.div>
            <div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-slate-300 text-sm break-all">
                vishwaa.vishwaa2@gmail.com
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
