import { motion } from 'framer-motion';

export default function About() {
   return (
      <section id="about" className="about">
         <div className="container">

            <motion.h2
               className="section-title"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               Sobre <span>Mim</span>
            </motion.h2>

            <div className="about-grid">

               {/* Lado esquerdo: Texto descritivo */}
               <motion.div
                  className="about-text"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                  <p>
                     Desenvolvedor Web Full Stack em início de carreira e estudante do 2.º ano de Engenharia Informática. Possuo conhecimentos em React.js, Node.js, Express.js e MySQL.
                  </p>
                  <p>
                     Com experiência prática no desenvolvimento de um sistema de painel administrativo para gestão de produtos, incluindo autenticação, APIs REST e integração com bases de dados.
                  </p>
               </motion.div>

               {/* Lado direito: Cards de estatísticas */}
               <motion.div
                  className="about-stats"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
               >
                  <motion.div
                     className="stat-card"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.2 }}
                  >
                     <h3>1</h3>
                     <p>Projeto Desenvolvido</p>
                  </motion.div>

                  <motion.div
                     className="stat-card"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.2 }}
                  >
                     <h3>WEB FULL STACK</h3>
                  </motion.div>
               </motion.div>

            </div>
         </div>
      </section>
   );
}