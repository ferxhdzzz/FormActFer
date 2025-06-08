# BookTracker
Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar libros. Está construido con React para el frontend y puede integrarse fácilmente con un backend RESTful (como Node.js + Express + MongoDB).

## Tecnologías Usadas
React

React Router

React Hook Form

CSS modular (con diseño limpio y minimalista)

react-hot-toast (notificaciones)

Hooks personalizados

## Estructura del Proyecto
pgsql
Copiar
Editar
├── public/
├── src/
│   ├── components/         → Componentes reutilizables (inputs, botones, títulos, etc.)
│   ├── hooks/              → Hooks personalizados para manejar datos (fetch, update, etc.)
│   ├── pages/              → Vistas principales: Home, Books, Welcome, Dashboard
│   ├── utils/              → Archivos utilitarios (como select options)
│   ├── App.jsx             → Enrutador principal
│   ├── index.js            → Punto de entrada de React
├── package.json
├── README.md
## Cómo Ejecutar el Proyecto Localmente
1. Clona este repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Ejecuta la aplicación
bash
Copiar
Editar
npm start
La aplicación se abrirá automáticamente en http://localhost:3000.

## Configuración del Backend (opcional)
Este proyecto espera que exista un backend en localhost para conectarse vía fetch (por ejemplo, a rutas como /api/books). Puedes crear un backend con Node.js y MongoDB o usar un servicio simulado con JSON Server.

## Funcionalidades Principales
Página de bienvenida personalizada.

Dashboard moderno y minimalista.

Lista de libros con edición y eliminación.

Agregar nuevos libros con validación.

Categorías y campos dinámicos.

Diseño responsive y accesible.


## by
Desarrollado por Fernanda Hernandez 2 A
