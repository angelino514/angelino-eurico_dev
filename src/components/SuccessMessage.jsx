export default function SuccessMessage() {
   return (
      <div className="success-container">
         <div className="success-icon-wrapper">
            <svg className="success-svg" viewBox="0 0 100 100">
               {/* Círculo de fundo */}
               <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="success-circle-bg"
               />
               {/* Círculo animado com borda giratória */}
               <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="success-circle"
               />
               {/* Checkmark animado */}
               <path
                  className="success-check"
                  fill="none"
                  d="M30 52 L45 67 L72 38"
               />
            </svg>
         </div>
         <h3>Mensagem Enviada!</h3>
         <p>Obrigado pelo contacto. A sua mensagem foi enviada com sucesso e responderei o mais breve possível.</p>
      </div>
   );
}