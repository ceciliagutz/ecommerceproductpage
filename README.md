✨ Sneaker Company ✨

Deploy actual: https://whimsical-axolotl-273872.netlify.app/women
Figma: https://www.figma.com/design/Tq6LUDwF6Dp0dDqXnoGwit/ecommerce-product-page?m=auto&t=y1DquufHYlk1AT7I-1
Figma/Propuesta: https://www.figma.com/proto/Tq6LUDwF6Dp0dDqXnoGwit/ecommerce-product-page?node-id=6138-835&t=xyvQ65rHXwbloruZ-1&scaling=min-zoom&content-scaling=fixed&page-id=6138%3A44&starting-point-node-id=6138%3A835
Código en GitHub: https://github.com/ceciliagutz/ecommerceproductpage

Sneaker Company es una tienda digital de calzado deportivo.
El proyecto busca ofrecer un e-commerce atractivo e intuitivo, donde los usuarios puedan explorar productos, añadirlos al carrito y visualizar su compra de forma sencilla y amigable desde cualquier dispositivo.

Este proyecto está enfocado en la experiencia de usuario (UX) y utiliza componentes reutilizables de React junto con estilos modernos.
---
🚀 Tecnologías utilizadas

⚛️ React – Para la construcción de componentes reutilizables y manejo de rutas.
🧠 JavaScript (ES6+) – Lógica de la aplicación.
🎨 HTML5 y CSS3 – Estructura y estilos personalizados.
---
🗂️ Estructura del proyecto
```plaintext
ecommerceproductpage/ 
├── public/                      # Recursos estáticos
│   └── images/                  # Imágenes del proyecto
│
├── src/
│   ├── assets/                  # Recursos adicionales
│   ├── data/                    # Recursos adicionales
│   │   ├── products/            # products.json
│   ├── components/              # Componentes reutilizables
│   │   ├── navbar/              #navbar.jsx + navbar.css
│   │   └── tarjeta_productos/   # tarjetaProducto.jsx + tarjetaProducto.css
│   │
│   ├── pages/                   # Páginas principales
│   │   ├── home/                # home.jsx + home.css
│   │   ├── women/               # women.jsx + women.css
│   │   ├── producto/           # producto.jsx + producto.css
│   │
│   ├── App.jsx                  # Enrutamiento principal con React Router
│   ├── App.css                  # Estilos globales
│   ├── index.css                # Estilos base
│   └── main.jsx                 # Punto de entrada de React
│
├── package.json                 # Dependencias y scripts
└── README.md                     # Documentación del proyecto
```
---
🌐 Ruteo

El archivo App.jsx se encarga de definir y administrar las rutas entre las diferentes páginas usando react-router-dom.
---
Ejemplo de rutas:

/ → Home

/women → Tenis para mujer -> producto - Se muestra la información del producto
---
⚙️ Instalación y ejecución

Clona el repositorio:
```bash
git clone https://github.com/ceciliagutz/ecommerceproductpage.git
```

Instala las dependencias:
```bash
npm install
```

Inicia el servidor de desarrollo:
```bash
npm run dev
```

Abre tu navegador en:
```bash
http://localhost:5173/
```
---
🔄 Migración futura

Actualmente este proyecto funciona únicamente en frontend con React.
---
👩‍💻 Desarrolladora

Cecilia Guadalupe Gutierrez Urbano


