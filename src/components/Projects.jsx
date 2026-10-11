import { motion } from "framer-motion";
import paine from "../assets/paine.png";

const funcionalidades = [
   {
      titulo: "Autenticação e gestão de utilizadores",
      descricao: "Sistema de registo, login, confirmação de e-mail, validação de credenciais com bcrypt e gestão de sessões através de cookies HTTP-only.",
      tecnologias: ["React", "Node.js", "Express.js", "bcrypt"],
   },
   {
      titulo: "Gestão de produtos (CRUD)",
      descricao: "Criação, consulta, edição e eliminação de produtos, com gestão de nomes, descrições, preços, categorias, stock e promoções.",
      tecnologias: ["React", "Express.js", "MySQL"],
   },
   {
      titulo: "Gestão de imagens",
      descricao: "Carregamento de múltiplas imagens por produto, visualização, atualização e associação dos ficheiros aos respetivos registos na base de dados.",
      tecnologias: ["Multer", "FormData", "MySQL"],
   },
   {
      titulo: "Especificações dos produtos",
      descricao: "Gestão dinâmica das características dos produtos, permitindo adicionar, consultar, editar e remover especificações.",
      tecnologias: ["React", "Node.js", "MySQL"],
   },
   {
      titulo: "Pesquisa e paginação",
      descricao: "Pesquisa de produtos e apresentação dos resultados por páginas, utilizando consultas SQL com LIMIT e OFFSET.",
      tecnologias: ["React", "Express.js", "SQL"],
   },
   {
      titulo: "Base de dados relacional",
      descricao: "Organização dos dados em tabelas relacionadas, utilizando chaves primárias e estrangeiras para associar produtos, imagens, especificações e utilizadores.",
      tecnologias: ["MySQL", "SQL", "Relacionamentos"],
   },
   {
      titulo: "API REST",
      descricao: "Desenvolvimento de endpoints HTTP para comunicação entre o Front-end e o Back-end, com tratamento de pedidos, respostas e erros.",
      tecnologias: ["Node.js", "Express.js", "HTTP"],
   },
   {
      titulo: "Validação e segurança",
      descricao: "Validação de dados, proteção de rotas administrativas, verificação de sessões, hash de palavras-passe e controlo de acesso.",
      tecnologias: ["Express.js", "bcrypt", "Cookies HTTP-only"],
   },
   {
      titulo: "Interface administrativa",
      descricao: "Interface desenvolvida em React para navegação entre páginas, formulários, tabelas, pesquisa, estados de carregamento",
      tecnologias: ["React", "React Router", "CSS"],
   },
];

export default function Projects() {
   return (
      <section id="projects" className="projects">


         <motion.div className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
         >
            <h2 className="section-title">Projeto <span>Principal</span></h2>
            <div className="featured-project">
               {/* Lado Esquerdo: Imagem e Visão Geral */}
               <div className="project-main-info">
                  <div className="project-image-container">
                     <img
                        src={paine}
                        alt="Painel Administrativo"
                        className="project-image"
                     />
                  </div>
                  <h3>Painel Administrativo E-Commerce</h3>
                  <p className="project-summary">
                     Sistema completo de gestão comercial com painel de controlo, API REST e base de dados relacional.
                  </p>
                  <a href="https://painel-admin-amber-pi.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                     Ver demo
                  </a>
               </div>

               {/* Lado Direito: Funcionalidades (Conteúdo Lateral Scrollável) */}
               <div className="project-features-container">
                  <h4 className="features-title">Funcionalidades do Sistema</h4>
                  <div className="features-list">
                     {funcionalidades.map((item, index) => (
                        <div key={index} className="feature-card">
                           <h5>{item.titulo}</h5>
                           <p>{item.descricao}</p>
                           <div className="project-tags">
                              {item.tecnologias.map((tech, techIndex) => (
                                 <span key={techIndex}>{tech}</span>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.div>

      </section>
   )
}