import { motion } from 'framer-motion';

const frontEnd = ["HTML", "CSS3", "TWILIND CSS", "JavaScript", "React.js"];
const backEnd = ["Node.js", "Express.js", "APIs REST"];
const datasets = ["MySQL", "SQL"];

export default function Skills() {
   return (
      <section id="skills" className="skills">
         <div className="container">

            <motion.h2
               className="section-title"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               Minhas <span>Habilidades</span>
            </motion.h2>

            <div className="container-main-skills">

               {/* Bloco Front-End */}
               <motion.div
                  className="container-itens-skills"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
               >
                  <h3>Front-End</h3>
                  <div className="face-grid-skil">
                     {frontEnd.map((skill, index) => (
                        <motion.div
                           key={index}
                           className="skill-card"
                           initial={{ opacity: 0, scale: 0.9 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                           <span>{skill}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Bloco Back-End */}
               <motion.div
                  className="container-itens-skills"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <h3>Back-End</h3>
                  <div className="face-grid-skil">
                     {backEnd.map((skill, index) => (
                        <motion.div
                           key={index}
                           className="skill-card"
                           initial={{ opacity: 0, scale: 0.9 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                           <span>{skill}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Bloco Banco de Dados */}
               <motion.div
                  className="container-itens-skills"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
               >
                  <h3>Banco de Dados</h3>
                  <div className="face-grid-skil">
                     {datasets.map((skill, index) => (
                        <motion.div
                           key={index}
                           className="skill-card"
                           initial={{ opacity: 0, scale: 0.9 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                           <span>{skill}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

            </div>

         </div>
      </section>
   );
}