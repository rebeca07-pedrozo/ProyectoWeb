
import "./Home.css";
import hamburguesa from "../assets/dino.png";

export default function Home() {
  return (
    <div className="home-container">
      {/* Bienvenida */}
      <section className="text-center">
        <h1>🌋 ¡Bienvenido al Territorio Dino! 🦖</h1>
        <p className="lead">
          Sabores gigantes, recetas jurásicas y un ambiente tan acogedor que ni los
          dinosaurios querrán extinguirse.
        </p>
        <img
          src={hamburguesa}
          alt="Restaurante Dino"
          className="banner-img shadow-lg"
        />
      </section>

      {/* Sobre nosotros */}
      <section>
        <h2>🦕 Nuestra Historia</h2>
        <p>
          Nacimos hace más de 10 años con una misión clara: traer a la mesa
          porciones colosales y un sabor que resista el paso de las eras.
          En <strong>Dino</strong>, cada plato es una expedición a un mundo de
          sabores legendarios.
        </p>
      </section>

      {/* Horarios */}
      <section>
        <h2>⏰ Horarios de Cacería</h2>
        <ul>
          <li>Lunes a Viernes: 12:00pm – 10:00pm</li>
          <li>Sábados: 12:00pm – 11:00pm</li>
          <li>Domingos y Festivos: 12:00pm – 9:00pm</li>
        </ul>
        <p>
          Ven cuando quieras, siempre encontrarás un banquete digno de un T-Rex.
        </p>
      </section>

      {/* Llamado a la acción */}
      <section className="text-center">
        <p className="mb-4 text-lg">
          🦖 Explora nuestra carta y descubre los <strong>manjares
          prehistóricos</strong> que harán rugir tu apetito.
        </p>
        <a href="/carta" className="btn-menu">
          Ver Carta Jurásica
        </a>
      </section>

      {/* Testimonios */}
      <section>
        <h2>🌟 Rugidos de Nuestros Clientes</h2>
        <blockquote>
          "Un lugar colosal, la comida siempre deliciosa y el servicio más
          amigable que un diplodocus."
        </blockquote>
        <blockquote>
          "El mejor restaurante de la ciudad, un verdadero festín
          prehistórico. ¡Volveré como un velociraptor hambriento!"
        </blockquote>
      </section>
    </div>
  );
}
