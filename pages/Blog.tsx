import React from 'react';
import GenericPage from './GenericPage';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const posts = [
      { id: 1, date: '10.24.24', title: 'The Death of Traditional UI', excerpt: 'Why invisible interfaces are the next frontier of user experience.' },
      { id: 2, date: '10.12.24', title: 'Scaling React for Enterprise', excerpt: 'Architectural patterns for massive frontend codebases.' },
      { id: 3, date: '09.28.24', title: 'AI as a Creative Partner', excerpt: 'How we use LLMs to augment our design process, not replace it.' },
      { id: 4, date: '09.15.24', title: 'The Monochrome Renaissance', excerpt: 'Why black and white design is making a massive comeback.' }
  ];

  return (
    <GenericPage 
      title="Intel" 
      subtitle="Thoughts, theories, and technical breakdowns from the Aetherion team."
    >
      <div className="grid grid-cols-1 gap-px bg-white/20 border border-white/20">
          {posts.map((post, index) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-black p-8 md:p-12 group hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4">
                      <div className="flex flex-col gap-2">
                          <span className="font-mono text-xs text-gray-500 group-hover:text-gray-400">{post.date}</span>
                          <h3 className="text-2xl md:text-3xl font-bold uppercase text-white group-hover:text-black">{post.title}</h3>
                          <p className="text-gray-400 group-hover:text-gray-600 max-w-2xl text-sm md:text-base">{post.excerpt}</p>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest border border-white group-hover:border-black px-4 py-2 self-start md:self-center text-white group-hover:text-black">Read</span>
                  </div>
              </motion.div>
          ))}
      </div>
    </GenericPage>
  );
};

export default Blog;