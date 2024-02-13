# PoC app Node.js, Express, htmx, Tailwind CSS

Este proyecto es una aplicación web que permite a los usuarios ver su balance de Bitcoin, el valor actual de Bitcoin en USD y EUR, y gestionar registros de balance en una base de datos SQLite. Utiliza Express para el backend, SQLite para la persistencia de datos, y Tailwind CSS para el frontend.

## Características

- Ver y añadir balances de Bitcoin.
- Ver el valor actual de Bitcoin en USD y EUR.
- Resetear la base de datos de balances.
- Interfaz de usuario construida con Tailwind CSS.

## Tecnologías Utilizadas

- Backend: Node.js con Express
- Base de Datos: SQLite
- Frontend: HTML, Tailwind CSS
- Herramientas: Webpack para empaquetado, Nodemon para desarrollo

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener Node.js instalado en tu sistema para ejecutar el proyecto y npm para gestionar las dependencias.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```
## Desarrollo
Para iniciar el servidor de desarrollo con reinicio automático, ejecuta:
    
```bash
npm run dev-server
```
Para compilar los archivos con cambios en tiempo real, ejecuta:

```bash
npm run watch
```

## Build para producción
Para compilar los archivos para producción, ejecuta:

```bash
npm run build
```
## Visualización
Abre dist/index.html en tu navegador para ver la aplicación en acción.
