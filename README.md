# Classic Motor Club

Plataforma web oficial para **Classic Motor Club**, desarrollada como proyecto evaluable del módulo **Diseño de Interfaces Web (DIW - T1)**.

- **Autor:** Ivan Kosolovskyy Fetsyk
- **Curso:** 2º DAW, Joyfe (2026/2027)

---

## 🔗 Enlaces del Proyecto

- **Repositorio Público (GitHub):** [https://github.com/donivanovich/RallyClassicMotors](https://github.com/donivanovich/RallyClassicMotors)
- **Aplicación en Producción:** [https://TU-PROYECTO.vercel.app](https://TU-PROYECTO.vercel.app) *(Sustituir por tu URL de Vercel / Netlify / GitHub Pages)*

---

## 🛠️ Arquitectura y Tecnologías

- **Framework:** Angular 21 empleando exclusivamente **Standalone Components**.
- **Enrutado:** Nativo con `provideRouter` y carga diferida (`loadComponent`) para las 5 vistas principales (`/`, `/catalogo`, `/itinerario`, `/inscripcion`, `/guia-estilo`).
- **Estado Reactivo:** Gestión local con **Angular Signals** (`signal`, `computed`) para el filtrado dinámico en tiempo real del catálogo de vehículos consumiendo datos desde `src/mocks/cars.json`.
- **Estilos y Maquetación:** SCSS modular (`_variables.scss`, `_mixins.scss`), maquetación propia con **CSS Grid y Flexbox**, metodología **BEM pura** (máximo 3 niveles de anidamiento) y enfoque **Mobile-First** con puntos de ruptura en `375px`, `768px` y `1440px`.
- **Accesibilidad (WCAG):** HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`), `lang="es"`, enlace de salto al contenido (`.skip-link`), foco de teclado visible (`:focus-visible`) y atributos `alt` descriptivos.

---

## 🤖 Declaración del Uso de Herramientas de Apoyo e Inteligencia Artificial

Para el desarrollo de este proyecto se han empleado las siguientes herramientas de apoyo y asistencia técnica:

1. **Herramientas consultadas:**
   - Proyectos realizados en prácticas de clase
   - Documentación oficial de Angular
   - ChatGPT y Gemini
2. **Áreas del código donde prestaron asistencia:**
   - **Auditoría de requisitos y estructura:** Verificación del cumplimiento de la rúbrica técnica (accesibilidad WCAG, estructura BEM y organización de tokens en `_variables.scss`).
   - **Datos de prueba (Mock JSON):** Apoyo en la redacción de descripciones históricas y fichas técnicas de los vehículos clásicos en `src/mocks/cars.json`.
   - **Estilos:** Generación del estilos globales agradables con el usuario
   - **README:** Actualizaciones del README
3. **Validaciones realizadas por el alumno:**
   - Revisión manual y adaptación de todo el código SCSS para garantizar el cumplimiento estricto de BEM sin superar 3 niveles de anidamiento.
   - Comprobación visual y responsive en navegador en los tres puntos de ruptura exigidos (`375px`, `768px` y `1440px`).
   - Prueba de navegación completa por teclado (`Tab` / `:focus-visible`) y validación de etiquetas semánticas HTML5.

---

## 📜 Cláusula de Autoría

«El alumno debe ser capaz de explicar y modificar en directo cualquier parte de su código; lo que no sepa explicar no se considerará de su autoría».
