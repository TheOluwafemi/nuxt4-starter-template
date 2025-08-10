# Nuxt 4 Starter Template

A modern, feature-rich starter template for Nuxt 4 projects with TypeScript, Tailwind CSS, ESLint, and more.

## Features

- ✅ **Nuxt 4** - Latest version with improved performance
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Type safety for your project
- 📊 **Pinia** - State management for Vue applications
- 📷 **Nuxt Image** - Optimized image handling
- 🔤 **Google Fonts** - Inter and Work Sans with all weights
- 🧪 **Testing** - Built-in testing support
- 🪝 **VueUse** - Collection of essential Vue Composition Utilities
- ✨ **ESLint** - Code quality and consistency

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/nuxt4-starter-template.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see your application

## Project Structure

```
nuxt4-starter-template/
├── app/                    # Main application code
│   ├── assets/             # Static assets
│   │   └── styles/         # CSS files
│   ├── components/         # Vue components
│   ├── composables/        # Reusable composition functions
│   ├── layouts/            # Layout components
│   ├── middleware/         # Nuxt middleware
│   ├── pages/              # Application pages
│   ├── plugins/            # Vue plugins
│   ├── stores/             # Pinia stores
│   └── utils/              # Utility functions
├── public/                 # Public static files
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Commands

```bash
# Development
npm run dev           # Start development server

# Building
npm run build         # Build for production
npm run generate      # Generate static site

# Linting and Testing
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run test:unit     # Run unit tests with Vitest
```

## Configuration

The template includes pre-configured settings for:

- **TypeScript** with strict type checking
- **Tailwind CSS** with custom font configuration
- **ESLint** with Vue and TypeScript rules
- **Pinia** for state management
- **Google Fonts** (Inter and Work Sans) with optimization

## CSS and Styling

This template uses Tailwind CSS with custom font configuration:

- **Inter** as the default sans-serif font
- **Work Sans** as an alternative font

The fonts are loaded and optimized using `@nuxt/fonts` module.

## Contributing

Feel free to submit issues or pull requests to improve this template.

## License

MIT

---

Made with ❤️ for the Nuxt community
