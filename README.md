# BookTracker
Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar libros. Está construido con React para el frontend y puede integrarse fácilmente con un backend RESTful (como Node.js + Express + MongoDB).

## Tecnologías Usadas
React

React Router

React Hook Form

CSS modular (con diseño limpio y minimalista)

react-hot-toast (notificaciones)

Hooks personalizados


1. **Clonar el repositorio**
```bash
git clone https://github.com/ferxhdzzz/luxepet.git
```

2. **Instalar dependencias del frontend**
```bash
cd frontend
npm install
npm run dev  
```


## Estructura del Proyecto

```
LUXEPET/
├── backend/
├── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
        ├── assets/
        ├── components/
        ├── pages/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
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
