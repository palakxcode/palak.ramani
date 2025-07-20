# Bento Portfolio

A modern, visually appealing developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Easily showcase your skills, projects, and contact information in a bento-style layout.

## Features
- Responsive, bento-style grid layout
- Customizable profile, skills, projects, and contact sections
- Modern design with gradient backgrounds and glassmorphism
- Built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
```

### Running the Development Server
```bash
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Customization
- **Profile Info:** Edit `app/page.tsx` to update your name, title, location, and profile image.
- **Projects & Skills:** Update the relevant sections in `app/page.tsx` to showcase your work and tech stack.
- **Styling:** Modify Tailwind classes in the components or update `tailwind.config.ts` for custom colors and themes.
- **Images:** Place your images in the `public/` directory and reference them in your components.

## Folder Structure
```
app/           # Main app pages and layout
components/    # Reusable UI components
hooks/         # Custom React hooks
lib/           # Utility functions
public/        # Static assets (images, etc.)
styles/        # Global styles
```

## Deployment
You can deploy this project to Vercel, Netlify, or any platform that supports Next.js.

## License
[MIT](LICENSE)

## Contact
For questions or feedback, please add your contact information here. 