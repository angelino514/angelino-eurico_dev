import { motion } from 'framer-motion';

export default function Hero() {
   return (
      <section id="hero" className="hero">
         <div className='container'>
            <div className="hero-content">
               {/* Título (Nome) */}
               <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  Angelino Eurico
               </motion.h1>

               {/* Subtítulo */}
               <motion.h2
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
               >
                  WEB FULL STACK JR
               </motion.h2>

               {/* Descrição */}
               <motion.p
                  className="hero-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
               >
                  Desenvolvedor Web Full Stack em início de carreira, com conhecimentos em HTML/CSS, JavaScript, React.js, Node.js, Express.js e MySQL, focado no desenvolvimento de aplicações web e APIs REST.
               </motion.p>

               {/* Botões de Ação */}
               <motion.div
                  className="hero-actions"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
               >
                  <motion.a
                     href="https://github.com/angelino514/"
                     className="btn primary"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     GitHub
                  </motion.a>
                  <motion.a
                     href="/ANGELINO.pdf" download={'ANGELINO.pdf'}
                     className="btn secondary"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     CV
                  </motion.a>
               </motion.div>

            </div>
         </div>
      </section>
   );
}