export default function Loader({ message = "A processar..." }) {
   return (
      <div className="loader-container">
         <div className="spinner"></div>
         {message && <p className="loader-message">{message}</p>}
      </div>
   );
}