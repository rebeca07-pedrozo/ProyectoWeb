
import "./Promociones.css";
import promo1 from "../assets/promo1.jpeg";
import promo2 from "../assets/promo2.jpeg";
import promo3 from "../assets/promo3.jpeg";

export default function About() {
  return (
    <div className="promociones-container">
      <h1 className="text-center">Ofertas Prehistóricas</h1>
      <p className="text-center lead mb-5">
        ¡Atrapa estas promociones antes de que se extingan! 🦖 Porciones gigantes,
        precios cavernarios y un rugido de sabor en cada mordida.
      </p>

      <div className="promos-grid">
        {/* Promo 1 */}
        <div className="promo-card">
          <img src={promo1} alt="promo1" className="promo-img" />
        </div>

        {/* Promo 2 */}
        <div className="promo-card">
          <img src={promo2} alt="promo2" className="promo-img" />
        </div>

        {/* Promo 3 */}
        <div className="promo-card">
          <img src={promo3} alt="promo3" className="promo-img" />
        </div>
      </div>
    </div>
  );
}
