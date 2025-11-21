Induce

Esta producto tiene como intención mostrar la implementación ideal del flujo de usuario de persona natural externa (PNE) del producto digital Induce, desde su interfaz propuesta en los prototipos de Figma hasta la lógica de las funciones clave como la autentificación, el enrutamiento y el uso de IA.

Repositorio de origen: https://github.com/JuanTenorioMunoz/Induce
Documentación actualizado por última vez en 21/11/2025

1. Configuración e Instalación

React

React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario (UI). Creada por Meta (anteriormente Facebook), permite a los desarrolladores crear aplicaciones web interactivas y escalables mediante la composición de componentes declarativos. La principal ventaja de React es el uso del *Virtual DOM*, que optimiza el rendimiento al actualizar solo las partes de la página que han cambiado, en lugar de recargar toda la interfaz. Esto lo hace ideal para aplicaciones de una sola página (SPA).

  Versión Usada: 19.1.1.
  Instalación: Se utiliza npm para añadir React al proyecto.
    
    npm install react react-dom

    Si se está iniciando el proyecto desde cero con una base moderna (como Vite o Next.js), se usaría un comando inicial, como npm create vite@latest o npx create-next-app@latest.


 Tailwind CSS

Tailwind CSS es un framework CSS. A diferencia de otros frameworks que proporcionan componentes pre-diseñados (como Bootstrap), Tailwind ofrece un conjunto extenso de clases de bajo nivel (como flex, pt-4, text-center) que permiten construir diseños completamente personalizados directamente en el marcado HTML o JSX, sin escribir CSS tradicional. Esto agiliza el desarrollo y asegura que el CSS sea ligero y específico para la aplicación.

  Versión Usada: 4.1.17
  Instalación: La instalación requiere configuración en el archivo postcss.config.js y el archivo CSS principal, además de los siguientes pasos iniciales:
    1.  Instalar el paquete de Tailwind y sus dependencias:
        
        npm install -D tailwindcss postcss autoprefixer

    2.  Inicializar el archivo de configuración de Tailwind:**

        npx tailwindcss init -p

    3.  Configurar las rutas en el archivo tailwind.config.js** para que Tailwind sepa dónde escanear el código y encontrar las clases de utilidad.

Inicio de la aplicación

    Para iniciar la aplicación desde un editor de código escribe en la terminal

    npm run dev

    E ingresa desde un navegador a port que se te muestra en la terminal.


2. Configuración de Supabase (Servicio del Backend)

 Supabase

Supabase es una plataforma de código abierto que funciona como un servicio Backend-as-a-Service (BaaS). Su objetivo principal es ofrecer una alternativa de código abierto a Firebase, basándose en la robustez de PostgreSQL. Supabase proporciona todas las herramientas esenciales para el backend de una aplicación, incluyendo autenticación de usuarios, una base de datos relacional altamente escalable, almacenamiento de archivos, y funciones serverless (Edge Functions). Su característica distintiva es la generación automática de APIs REST y GraphQL a partir del esquema de la base de datos, lo que permite a los clientes de React interactuar directamente y de forma segura con los datos utilizando el SDK de Supabase.


1. Base de Datos
    El proyecto usa Supabase como base datos para guardar información de las vacantes y los usuarios.

2. Autenticación (Auth):
    Se usan funciones predetermindas de Supabase para la creación de cuentas, y autenticación de los usuarios al iniciar sesión,
    también se guardan los datos personales bajo el id de los usuarios.


3. Arquitectura y Organización del Código
    Induce tiene la siguiente estructura:

    INDUCE/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── workflows/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── vite.config.js
    
        - Assets: Aquí se guardan los contenidos gráficos constantes como iconos e imágenes del branding, por ejemplo, la imagen del logo de Induce.
        
        - Components: Para la creación de la interfaz se ha usado el método llamado "Atomic design" basado en contruir piezas de códigos reutilizables y personalizables para armar las diferentes páginas, garantizando consistencia, escalabilidad y evitando repetir código. A estas piezas se les llama "Componentes" y en esta carpeta del mismo nombre se encuentran 26 componentes con los que se construyeron las páginas, estos están estan basados en los componentes diseñados en el prototipo de figma, a través de los parámetros la información de adentro suyo puede cambiarse. Al editar un componente en su archivo original cambiarán automáticamente todas las instancias de este usadas en la página, esto permite un mantenimiendo eficaz de la plataforma.
        
        - Pages: En esta carpeta están construídas las pantallas de la aplicación, se tienen las siguientes:
        Config: Esta página esta armada solo en su parte visual, por lo que no posee interacciones complejas que cambien el estado de toda la aplicación, tales como el idioma o el modo de visualización
        
        - Curriculum: Está página si posee una funcionalidad profunda, permitiendo armar hojas de vida a con ayuda de la inteligencia artificial, el uso de está será descrita posteriormente.
        
        - Formulary: Esta construída en el aspecto visual y funcional, la información ahí solicitada es guardada en Supabase
        
        - Home: La página principal esta construída visual y funcionalmente, las vacantes son traídas desde la base de datos en supabase y al hacer click en una vacante la sidebar cambia para mostrarla de forma detallada

        - Membership: Está construída en su aspecto visual.
        
        - Profile: Está construída en su aspecto visual.

        - Register: Está construída en el aspecto visual y funcional, desde aquí se registran nuevos usuarios cuyas credenciales se guardan en Supabase.

        - Sign In: Está construída en el aspecto visual y funcional, solicita credenciales de usuario desde Supabase para verificar la identidad de los usuarios ya registrados que inician sesión.

        - Vacantes: Está contruída en el aspecto visual y funcional, las vacantes porvienen de la base de datos de Supabase.

    - Routes
    Desde este archivo se establecen los endpoints que permiten ingresar a cada pantalla, las rutas no estan protegidas para los usuarios, de crearse nuevas páginas su ruta debe ser añadida aquí.

    - Services
    Aquí se guardan credenciales que Supabase necesita para funcionar

    - Utils
    Aquí se importan las funciones que proveen servicios externos como Supabase

    - Workflows
    Aquí se encuentran los archivos que la IA necesita para funcionar.

    - App.css
    Archivo de soporte para los estilos de la página

    - App.jsx 
    Desde aquí se inyecta toda la página que se mostrará en pantalla

    - Index.css
    Aquí están estilos globales definidos, como los colores y tipografías, además de los estilos de los componentes usados en más de una página

    - main.jsx
    Archivo de soporte desde donde se inyecta la App.jsx al html

4. Inteligencia artificial