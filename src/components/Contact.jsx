import { useState } from "react";
import { motion } from "framer-motion";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

export default function Contact() {
   const [mensagem, setMensagem] = useState(false);
   const [typeMenagem, setTypeMenagem] = useState(false);
   const [mensgaemShow, setMesnsagemShow] = useState('');
   const [erro, setErro] = useState(false);
   const [loading, setLoading] = useState(false);

   const regex = {
      name: /^[A-Za-zÀ-ÿ\s'-]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: /\S/
   };

   const [formadata, setFormadata] = useState({
      name: '',
      email: '',
      messege: ''
   });

   function hadelGange(e) {
      const { name, value } = e.target;
      setFormadata(prev => ({
         ...prev, [name]: value
      }));
   }

   async function sendMessage(e) {
      e.preventDefault();

      if (formadata.name.trim() === '' || formadata.email.trim() === '' || formadata.messege.trim() === '') {
         setMesnsagemShow('Preencha todos os campos');
         setErro(true);
         return;
      }

      if (!regex.name.test(formadata.name.trim())) {
         setMesnsagemShow('Nome Inválido');
         setErro(true);
         return;
      }

      if (!regex.email.test(formadata.email.trim())) {
         setMesnsagemShow('Email Inválido');
         setErro(true);
         return;
      }

      if (!regex.message.test(formadata.messege.trim())) {
         setMesnsagemShow('Mensagem Inválida');
         setErro(true);
         return;
      }

      if (typeof formadata.name !== 'string' || typeof formadata.email !== 'string' ||
         typeof formadata.messege !== 'string') {
         setMesnsagemShow('Todos os campos devem ser textos válidos');
         setErro(true);
         return;
      }

      setLoading(true);
      setErro(false);

      try {
         const infSend = new FormData();
         infSend.append('name', formadata.name.trim());
         infSend.append('email', formadata.email.trim());
         infSend.append('messege', formadata.messege.trim());

         const res = await fetch('http://localhost:3000/mensgemportffolio', {
            method: 'POST',
            body: infSend
         });

         const inf = await res.json();
         if (inf.erro === true) {
            setMensagem(true);
            setTypeMenagem(false);
            setMesnsagemShow(inf.mensagem);
            setTimeout(() => { setMensagem(false); }, 4000);
            return;
         }

         if (inf.erro === false) {
            setMensagem(true);
            setTypeMenagem(true);
            setMesnsagemShow(inf.mensagem);
            setTimeout(() => { setMensagem(false); }, 4000);
            return;
         }

      } catch (err) {
         console.log(err);
         setMesnsagemShow('Erro ao conectar com o servidor.');
         setErro(true);
      } finally {
         setLoading(false);
      }
   }

   return (
      <>
         {loading && <Loader />}

         {mensagem && (
            <motion.section
               className="section-message"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               {typeMenagem ? <SuccessMessage /> : <ErrorMessage message={mensgaemShow} />}
            </motion.section>
         )}

         <section id="contact" className="contact">
            <div className="container">

               <motion.h2
                  className="section-title"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Enviar <span> Mensagem </span>
               </motion.h2>

               <motion.div
                  className="contact-container"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                  <form className="contact-form" onSubmit={sendMessage}>

                     {erro && <ErrorMessage message={mensgaemShow} />}

                     <div className="form-group">
                        <label htmlFor="name">Seu Nome</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formadata.name}
                           placeholder="Seu nome"
                           onChange={hadelGange}
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="email">Seu E-mail</label>
                        <input
                           value={formadata.email}
                           name="email"
                           type="email"
                           id="email"
                           placeholder="seu@email.com"
                           onChange={hadelGange}
                        />
                     </div>

                     <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                           name="messege"
                           id="message"
                           value={formadata.messege}
                           onChange={hadelGange}
                           placeholder="Escreva a sua mensagem..."
                        ></textarea>
                     </div>

                     <motion.button
                        type="submit"
                        className="btn primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        Enviar Mensagem
                     </motion.button>
                  </form>
               </motion.div>
            </div>
         </section>
      </>
   );
}