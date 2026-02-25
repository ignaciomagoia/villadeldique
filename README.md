# Villa del Dique - Landing Frontend

Landing page de turismo hecha con:

- Next.js (App Router) + TypeScript
- Tailwind CSS
- lucide-react (íconos livianos)

No usa backend, base de datos ni APIs.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura principal

- `app/page.tsx`: composición de la landing (una sola página).
- `components/`: componentes reutilizables (`Navbar`, `Hero`, `IntroSection`, `IconSection`, `CTAButton`, `Banner`, `TravelCards`, `Footer`).
- `data/site-content.ts`: arrays para menú, íconos y cards.
- `app/globals.css`: paleta, estilos base y accesibilidad de foco.

## Deploy en Vercel

### Opción recomendada (Git + Vercel)

1. Subir este repo a GitHub/GitLab/Bitbucket.
2. Entrar a https://vercel.com/new.
3. Importar el repositorio.
4. Framework detectado: `Next.js`.
5. Dejar valores por defecto y hacer click en **Deploy**.

### Opción CLI

```bash
npm i -g vercel
vercel
```

Seguir el asistente y luego, para producción:

```bash
vercel --prod
```
