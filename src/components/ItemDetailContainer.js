import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

let productos = [
  {
    nombre: "Café americano",
    precio: 147,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/ee744bad-3bb7-4f10-b2b7-d022a39ebf00.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El café americano es una bebida popular que se prepara añadiendo agua caliente a un espresso. Esta bebida tiene un sabor fuerte y rico, y se puede disfrutar sola o con leche y endulzante al gusto. El café americano es una excelente opción para aquellos que buscan una bebida de café suave pero con un sabor intenso.",
    categoria: "Cafetería",
    id: "1"
  },
  {
    nombre: "Café capuccino",
    precio: 190,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/7bca466d-a84b-493b-89ba-1785fc4703a0.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El café cappuccino es una bebida italiana que combina espresso, leche vaporizada y espuma de leche. Se sirve en una taza grande y se puede disfrutar solo o con un poco de chocolate en polvo espolvoreado encima. El resultado es una bebida suave y cremosa con un equilibrio perfecto entre el sabor del café y la dulzura de la leche. El café cappuccino es una opción popular para aquellos que buscan una bebida de café con un toque de elegancia.",
    categoria: "Cafetería",
    id: "2"
  },
  {
    nombre: "Café mocaccino",
    precio: 200,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/d8d4c98b-e4ab-42a5-9aab-9e0f55b8f5cb.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El café macaccino es una bebida de café que se prepara mezclando espresso, leche de almendra, cacao en polvo y polvo de maca. La maca es una planta originaria de Perú conocida por sus propiedades energizantes y nutricionales. Esta bebida combina los sabores intensos del café y el cacao con los beneficios para la salud de la maca y la leche de almendra. El café macaccino es una opción deliciosa y saludable para aquellos que buscan una alternativa a las bebidas de café tradicionales.",
    categoria: "Cafetería",
    id: "3"
  },
  {
    nombre: "Caramel latte",
    precio: 200,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/c0c87dc0-1108-4bc6-8d50-8f60af53081d.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El café caramel latte es una bebida de café hecha con espresso, leche vaporizada y jarabe de caramelo. Esta bebida tiene un sabor dulce y cremoso, con un toque de sabor a caramelo. El café caramel latte es una opción popular para aquellos que buscan una bebida de café indulgente y dulce. Se puede disfrutar caliente o frío y se puede personalizar con diferentes tipos de leche y sabores de jarabe.",
    categoria: "Cafetería",
    id: "4"
  },
  {
    nombre: "Pan jala mini",
    precio: 60,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/088f2dff-9339-44b8-94ac-380b7f6e0046.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El pan jala es un tipo de pan plano originario de la India y Pakistán. Está hecho de harina de trigo, agua, levadura, sal y aceite, y se cocina en una sartén plana. El pan jala tiene una textura ligera y esponjosa con un sabor suave y ligeramente salado. Se suele servir como acompañamiento de platos indios y se puede mojar en salsas y curry. El pan jala es una opción popular para aquellos que buscan una alternativa al pan tradicional.",
    categoria: "Panadería",
    id: "5"
  },
  {
    nombre: "Carrot cake",
    precio: 225,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/204a3bc2-f80b-4665-9ed3-72b4ec7780a2.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El carrot cake, o pastel de zanahoria, es un postre dulce que tiene como ingrediente principal la zanahoria rallada. Además de la zanahoria, la receta también suele incluir ingredientes como nueces, pasas, canela y jengibre. El pastel se hornea y se cubre con un glaseado de queso crema, que le da un sabor dulce y cremoso. El carrot cake es una opción popular para aquellos que buscan un postre delicioso con un toque de sabor saludable gracias a la zanahoria.",
    categoria: "Panadería",
    id: "6"
  },
  {
    nombre: "Budín inglés",
    precio: 290,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/d514ce56-4229-4cb3-86b9-9959bd360b6d.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El budín inglés, o Christmas pudding, es un postre tradicional británico que se consume en Navidad. Está hecho con una mezcla de frutas secas, como pasas, dátiles y ciruelas, mezcladas con harina, huevos, mantequilla y especias. La mezcla se cuece al vapor durante varias horas, lo que le da una textura densa y húmeda. El budín inglés se suele servir caliente y se puede acompañar con crema inglesa o brandy butter. Es un postre rico y decadente que es muy popular en las festividades navideñas en el Reino Unido.",
    categoria: "Panadería",
    id: "7"
  },
  {
    nombre: "Alfajor de maicena",
    precio: 135,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/b2a362cb-a491-49a7-a00f-592922ba744d.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El alfajor de maicena es un dulce típico de Uruguay y otros países de Latinoamérica. Está hecho de dos galletas suaves y esponjosas de maicena unidas por un relleno dulce de dulce de leche. Las galletas están hechas de almidón de maíz, mantequilla, huevos, azúcar y esencia de vainilla. El alfajor de maicena es un dulce suave y delicado, que se derrite en la boca, y es perfecto para disfrutar con una taza de té o café. Es uno de los dulces más populares en la región y es conocido por su sabor único y suave textura.",
    categoria: "Panadería",
    id: "8"
  },
  {
    nombre: "Tartaleta de limón",
    precio: 285,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/6de456e8-c416-4585-9f72-c7890a7636bf.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "La tartaleta de limón y merengue es un postre clásico que combina el sabor ácido y refrescante del limón con la suavidad y dulzura del merengue. La tartaleta está hecha de una masa de hojaldre o masa quebrada que se rellena con una crema de limón hecha con jugo de limón, huevos, azúcar y mantequilla. Luego, se cubre con un merengue hecho con claras de huevo y azúcar, que se tuesta ligeramente en el horno. La tartaleta de limón y merengue es un postre delicioso que combina diferentes texturas y sabores para crear una experiencia única en cada bocado.",
    categoria: "Pastelería",
    id: "9"
  },
  {
    nombre: "Torta de chocolate",
    precio: 320,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/0d24e87c-6b0b-4610-b569-a77d559cd1e9.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "La torta de chocolate con dulce de leche es un postre popular en Latinoamérica. Se trata de una torta de chocolate esponjosa y húmeda, rellena y cubierta con dulce de leche. La torta de chocolate se hace con cacao en polvo, harina, huevos, azúcar, aceite y leche, y se hornea en un molde para torta. Luego, se corta en dos o tres capas y se rellena con dulce de leche. Se puede decorar con crema batida, virutas de chocolate o nueces. La combinación del sabor rico y dulce del chocolate con la cremosidad del dulce de leche es simplemente deliciosa, convirtiéndola en una de las opciones más populares para los amantes del chocolate y del dulce de leche.",
    categoria: "Pastelería",
    id: "10"
  },
  {
    nombre: "Milhoja",
    precio: 320,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/2e2e6258-8d80-4abc-933e-67d1b2b63471.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "La milhoja es un postre clásico en la gastronomía de varios países, entre ellos España y Francia. Está hecho de varias capas de hojaldre crujiente intercaladas con crema pastelera o nata montada y cubierto con azúcar glas o una capa de fondant. La milhoja es un postre ligero y delicado, que combina diferentes texturas para crear una experiencia única en cada bocado. A menudo, se sirve como postre en restaurantes y se puede encontrar en panaderías y pastelerías en todo el mundo. Es un postre versátil que se puede personalizar con diferentes sabores y decoraciones para adaptarse a las preferencias de cada persona.",
    categoria: "Pastelería",
    id: "11"
  },
  {
    nombre: "Crumble de manzana",
    precio: 245,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/f2929e0f-193a-4acf-ae10-5c869761569c.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El crumble de manzana es un postre típico de la cocina inglesa que consiste en una capa de manzanas cocidas cubierta con una mezcla de harina, mantequilla y azúcar que se hornea hasta que quede crujiente. Las manzanas se cocinan con azúcar, canela y a veces se agrega jugo de limón para dar un toque ácido. La mezcla de harina, mantequilla y azúcar se corta con un tenedor para crear una textura granulada y se esparce sobre las manzanas. El crumble se hornea en el horno hasta que la capa superior esté dorada y crujiente. Es un postre delicioso y reconfortante que se sirve caliente con helado de vainilla o crema batida.",
    categoria: "Pastelería",
    id: "12"
  },
  {
    nombre: "Jugo de naranja",
    precio: 200,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/514380-4ae0acf3-6402-47c8-8504-e114b05a0b64.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El jugo de naranja natural es una bebida refrescante y saludable hecha de naranjas frescas. Las naranjas se exprimen para extraer el jugo, que se puede beber solo o mezclado con otros ingredientes como limón, piña o zanahoria. El jugo de naranja natural es rico en vitamina C, que es esencial para el sistema inmunológico y ayuda a la absorción de hierro. Además, es una buena fuente de folato, potasio y antioxidantes. Beber jugo de naranja natural es una excelente manera de refrescarse y mantenerse hidratado mientras se disfruta del sabor fresco y cítrico de las naranjas.",
    categoria: "Jugos",
    id: "13"
  },
  {
    nombre: "Limonada",
    precio: 200,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/514380-643e76c2-1240-4d93-a822-5c8af22a2352.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "La limonada es una bebida refrescante y popular en todo el mundo, hecha a base de limones, agua y azúcar. Los limones se exprimen para extraer su jugo, que se mezcla con agua y azúcar para crear una bebida fresca y dulce. La limonada también puede ser personalizada con ingredientes adicionales como menta, jengibre, fresas o incluso alcohol, dependiendo de la preferencia de cada persona. Además de ser una bebida refrescante, la limonada es rica en vitamina C y antioxidantes, lo que la convierte en una opción saludable y deliciosa para hidratarse en cualquier momento del día.",
    categoria: "Jugos",
    id: "14"
  },
  {
    nombre: "Detox",
    precio: 290,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/514380-5d87163f-19a7-4241-9027-e841cb203af0.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El jugo detox es una bebida hecha a base de frutas y verduras frescas, diseñada para ayudar al cuerpo a eliminar toxinas y mejorar la digestión. Los ingredientes pueden variar según las preferencias y necesidades de cada persona, pero a menudo incluyen verduras como espinacas, apio y pepino, así como frutas como manzanas, piñas y naranjas. Estos ingredientes se mezclan en una licuadora o extractor de jugos para crear una bebida suave y refrescante. Algunas personas también agregan ingredientes adicionales como jengibre, limón y cilantro para mejorar el sabor y los beneficios para la salud. El jugo detox es una forma fácil y deliciosa de consumir una gran cantidad de nutrientes y vitaminas en una sola bebida, y puede ser útil para ayudar al cuerpo a desintoxicarse y aumentar la energía.",
    categoria: "Jugos",
    id: "15"
  },
  {
    nombre: "Licuado de frutos rojos",
    precio: 300,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/514380-199eb0f7-e952-45dd-bc43-e0535a7791fe.jpg?quality=90&width=1008&webp=1&dpi=1.5",
    descripcion: "El licuado de frutos rojos es una bebida cremosa y deliciosa hecha de una mezcla de frutos rojos, como fresas, frambuesas, arándanos y moras, y una base líquida como leche, yogur o jugo. Los ingredientes se mezclan en una licuadora hasta obtener una textura suave y homogénea, y se puede endulzar con miel, jarabe de agave o azúcar al gusto. El licuado de frutos rojos es una bebida rica en antioxidantes, fibra y vitamina C, lo que la convierte en una opción saludable y deliciosa para el desayuno o como un refrigerio refrescante. Además, se puede personalizar con ingredientes adicionales como plátanos, espinacas o proteína en polvo para aumentar los nutrientes y mejorar el sabor.",
    categoria: "Jugos",
    id: "16"
  },


];


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const resultado = productos.find((elemento) => elemento.id === id);
  
    useEffect(() => {
      const productosSelecionados = () => {
        const data = resultado;
        setProducts(data);
      };
  
      productosSelecionados();
    }, [id]);
  

    return (
        <>
            <ItemDetail productos={products} />
        </>
    );
};

export default ItemDetailContainer;