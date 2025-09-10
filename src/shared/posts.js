import sundae from '../assets/sundae.png'; // sube un nivel desde shared a src y luego entra a assets
import costillas from '../assets/costillas.jpg';
import burger from '../assets/burger.jpg';
import alitas from '../assets/alitas.jpg';
import ensalada from '../assets/ensalada.jpg';
import tacos from '../assets/tacos.jpg';
import sopa from '../assets/sopa.jpg';
import pizza from '../assets/pizza.jpg';
import calzone from '../assets/calzone.jpg';
import malteada from '../assets/malteada.jpg';
import postre from '../assets/postre.jpg';
// importa todas las que necesites

export default [
  // 🥩 Carnívoros Colosales
  {
    id: 1,
    title: "Costillas del T-Rex",
    description: "Costillas gigantes ahumadas al fuego cavernario y bañadas en salsa volcánica secreta. Un banquete para depredadores hambrientos.",
    price: 46000,
    image: costillas,
    category: "Carnívoros Colosales",
    ingredients: ["Costillas de cerdo", "Salsa volcánica", "Especias secretas"]
  },
  {
    id: 2,
    title: "BrontoBurger Suprema",
    description: "Hamburguesa colosal con doble carne jugosa, queso derretido y pan jurásico. Cada mordida es un rugido de sabor.",
    price: 39000,
    image: burger,
    category: "Carnívoros Colosales",
    ingredients: ["Carne de res", "Queso cheddar", "Pan de hamburguesa", "Salsa secreta"]
  },
  {
    id: 3,
    title: "Alitas Velociraptor",
    description: "Alitas crujientes bañadas en salsa magma ardiente. Tan veloces que desaparecerán de tu plato en segundos.",
    price: 29000,
    image: alitas,
    category: "Carnívoros Colosales",
    ingredients: ["Alitas de pollo", "Salsa picante", "Especias variadas"]
  },
  
  // 🌿 Herbívoros Salvajes
  {
    id: 4,
    title: "Ensalada DinoVerde",
    description: "Frescura jurásica: mix de hojas, tomates carnívoros y aderezo secreto de la cueva Dino.",
    price: 23000,
    image: ensalada,
    category: "Herbívoros Salvajes",
    ingredients: ["Lechuga", "Tomates", "Aderezo secreto", "Aceite de oliva"]
  },
  {
    id: 5,
    title: "Tacos Triceratops",
    description: "Tortillas rústicas rellenas de carne especiada, queso fundido y hierbas ancestrales. Fuerza herbívora con espíritu carnívoro.",
    price: 27000,
    image: tacos,
    category: "Herbívoros Salvajes",
    ingredients: ["Tortillas", "Carne especiada", "Queso fundido", "Hierbas"]
  },
  {
    id: 6,
    title: "Sopa del Mamut",
    description: "Caldo ancestral con carne tierna y verduras prehistóricas que revive hasta al cavernícola más dormido.",
    price: 31000,
    image: sopa,
    category: "Herbívoros Salvajes",
    ingredients: ["Carne de res", "Verduras prehistóricas", "Caldo casero"]
  },

  // 🍕 Erupciones de Sabor
  {
    id: 7,
    title: "Pizza Meteoro",
    description: "Masa crujiente horneada en piedra volcánica, cubierta con queso fundido y toppings explosivos. Impacto directo al paladar.",
    price: 36000,
    image: pizza,
    category: "Erupciones de Sabor",
    ingredients: ["Masa de pizza", "Queso mozzarella", "Tomates", "Toppings explosivos"]
  },
  {
    id: 8,
    title: "Dino Calzone",
    description: "Calzone gigante relleno de carne, queso y vegetales jurásicos. Perfecto para un rugido de sabor en cada mordida.",
    price: 35000,
    image: calzone,
    category: "Erupciones de Sabor",
    ingredients: ["Masa de pizza", "Carne", "Queso", "Vegetales jurásicos"]
  },

  // 🍨 Extinciones Dulces
  {
    id: 9,
    title: "DinoSundae Fosilizado",
    description: "Helado cremoso con sirope volcánico, chispas jurásicas y galleta fosilizada. Un hallazgo dulce de otra era.",
    price: 18000,
    image: sundae,
    category: "Extinciones Dulces",
    ingredients: ["Helado de vainilla", "Sirope volcánico", "Galletas"]
  },
  {
    id: 10,
    title: "Meteoro Shake",
    description: "Malteada jurásica de fresa, chocolate o vainilla, cubierta con crema batida y lluvia de meteoritos de galleta.",
    price: 20000,
    image: malteada,
    category: "Extinciones Dulces",
    ingredients: ["Leche", "Helado de fresa", "Crema batida", "Galletas"]
  },
  {
    id: 11,
    title: "Trilogía del Edén",
    description: "Brownie volcánico, cheesecake jurásico y frutas mesozoicas bañadas en miel. Un festín arqueológico de dulzura.",
    price: 22000,
    image: postre,
    category: "Extinciones Dulces",
    ingredients: ["Brownie", "Cheesecake", "Frutas"]
  }
]
