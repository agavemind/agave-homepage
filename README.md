# Agave Tech Homepage

This is the official homepage for Agave Tech, showcasing our mission and core efforts in enhancing human capabilities through AI.

## Features

- Modern, responsive design
- Smooth animations and transitions
- Contact form
- Optimized for performance and SEO

## Tech Stack

- Next.js 14.1.0
- TypeScript 5
- Tailwind CSS 3.4
- Framer Motion 11.18
- PostCSS 8
- ESLint

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

3. Set up environment variables:

   Create a `.env` file in the root directory with the required environment variables:

   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
agave-homepage/
├── src/              # Source files
├── public/           # Static files
├── .next/           # Next.js build output
├── node_modules/    # Dependencies
├── .env            # Environment variables
├── .gitignore      # Git ignore rules
├── next.config.ts   # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project metadata and dependencies
```

## Development

Available commands:

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment to GitHub Pages

1. Ensure your repository is configured for GitHub Pages deployment.

2. The project is already set up with gh-pages package and necessary configurations.

3. Deploy by running:

   ```bash
   npm run deploy
   ```

4. Configure GitHub Pages in your repository settings to use the gh-pages branch.

5. Your site will be available at `https://<username>.github.io/agave-homepage`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
