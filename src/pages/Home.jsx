
import "./Home.css";
import hamburguesa from "../assets/dino.png";

export default function Home() {
  return (
    <div className="home-container">
      {/* Bienvenida */}
      <section className="text-center">
        <h1>¡Bienvenido!</h1>
        <p className="lead">Sabores únicos, ambiente acogedor y la mejor atención.</p>
        <img
          src={hamburguesa}
          alt="Restaurante"
         className="banner-img shadow-lg"
        />
      </section>

      {/* Sobre nosotros */}
      <section>
        <h2>Sobre nosotros</h2>
        <p>
          Somos un restaurante familiar con más de 10 años de experiencia
          ofreciendo platos tradicionales e innovadores. Queremos que cada visita
          sea una experiencia inolvidable.
        </p>
      </section>

      {/* Horarios */}
      <section>
        <h2>Horarios de atención</h2>
        <ul>
          <li>Lunes a Viernes: 12:00pm – 10:00pm</li>
          <li>Sábados: 12:00pm – 11:00pm</li>
          <li>Domingos y Festivos: 12:00pm – 9:00pm</li>
        </ul>
      </section>

      {/* Llamado a la acción */}
      <section className="text-center">
        <p className="mb-4 text-lg">Descubre nuestra variedad de platos y recomendaciones.</p>
        <a href="/carta" className="btn-menu">
          Ver la Carta
        </a>
      </section>

      {/* Testimonios */}
      <section>
        <h2>Lo que dicen nuestros clientes</h2>
        <blockquote>
          "Un lugar excelente, la comida siempre deliciosa y el servicio impecable."
        </blockquote>
        <blockquote>
          "El mejor restaurante de la ciudad, sin duda volveré."
        </blockquote>
      </section>
    </div>
  );
}
