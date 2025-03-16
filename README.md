# Agave Tech Homepage

This is the official homepage for Agave Tech, showcasing our mission and core efforts in enhancing human capabilities through AI.

## Features

- Modern, responsive design
- Smooth animations and transitions
- Contact form
- Optimized for performance and SEO

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd agave-homepage
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

1. Create a new repository on GitHub.

2. Install the gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add the following scripts to your package.json:

   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export",
       "deploy": "next build && touch out/.nojekyll && gh-pages -d out --dotfiles"
     }
   }
   ```

4. Create or update next.config.js:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
     basePath: "/agave-homepage",
   };

   module.exports = nextConfig;
   ```

5. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

6. Configure GitHub Pages in your repository settings to use the gh-pages branch.

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
