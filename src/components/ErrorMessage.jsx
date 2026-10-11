export default function ErrorMessage({ message }) {
   return (
      <div className="error-container">
         <div className="error-icon-wrapper">
            <svg className="error-svg" viewBox="0 0 100 100">
               {/* Círculo de fundo */}
               <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="error-circle-bg"
               />
               {/* Círculo animado com borda vermelha */}
               <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="error-circle"
               />
               {/* Linha 1 do X */}
               <path
                  className="error-x-line-1"
                  fill="none"
                  d="M35 35 L65 65"
               />
               {/* Linha 2 do X */}
               <path
                  className="error-x-line-2"
                  fill="none"
                  d="M65 35 L35 65"
               />
            </svg>
         </div>

         <h3>{message}</h3>
         <p>
         </p>
      </div>
   );
}