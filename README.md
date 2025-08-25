# JonDepannage - Breakdown & Towing Service Website

<p align="center">
  <img src="public/images/logo.png" alt="JonDepannage Logo" width="100" />
</p>

A modern, responsive bilingual website for JonDepannage - a professional breakdown, towing, and transport service based in La Colle-sur-Loup, France. Available 24/7 for emergency roadside assistance.

## 🚗 About JonDepannage

JonDepannage provides reliable automotive services including:
- **Breakdown Service** (Dépannage) - Emergency roadside assistance
- **Towing** (Remorquage) - Professional vehicle recovery
- **Transport** - Vehicle transportation services

**Contact Information:**
- 📞 Phone: [06 02 75 80 29](tel:+33602758029)
- 📧 Email: [jondepannage@gmail.com](mailto:jondepannage@gmail.com)
- 📍 Address: 1100 Rte de Gréolières, 06480 La Colle-sur-Loup, France

## 🌟 Features

- **Bilingual Support**: Fully functional French/English language toggle
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Image Carousel**: Showcase of services and equipment
- **Contact Integration**: Direct phone calls and email links
- **PWA Ready**: Includes manifest for mobile app-like experience
- **SEO Optimized**: With sitemap and robots.txt

## 🛠 Tech Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for responsive design
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com) with [Radix UI](https://radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Language**: TypeScript for type safety
- **Package Manager**: Bun for fast dependency management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tsukoyachi/jondepannage.git
   cd jondepannage
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Run the development server**
   ```bash
   # Using Bun
   bun dev

   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Available Scripts

```bash
# Development
bun dev          # Start development server
npm run dev      # Alternative with npm

# Production
bun run build    # Build for production
bun start        # Start production server

# Code Quality
bun run lint     # Run ESLint
bun run format   # Format code with Prettier
```

## 🐳 Docker Deployment

The project includes Docker support for easy deployment:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or manually with Docker
docker build -t jondepannage .
docker run -p 3000:3000 jondepannage
```

## 🏗 Project Structure

```
jondepannage/
├── app/                          # Next.js App Router
│   ├── components/              # React components
│   │   ├── carousel/           # Image carousel component
│   │   ├── contact-data/       # Contact information
│   │   ├── cover/              # Hero section
│   │   ├── navbar/             # Navigation with language toggle
│   │   ├── phone-button/       # Call-to-action button
│   │   ├── quality/            # Quality/services section
│   │   └── sub-cover/          # Secondary hero section
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/ui/               # Reusable UI components (ShadCN)
├── public/images/              # Static assets
│   ├── carousel/               # Service images
│   └── logo.png               # Company logo
├── manifest/                   # Kubernetes deployment files
├── Dockerfile                  # Docker configuration
├── docker-compose.yml         # Docker Compose setup
└── tailwind.config.ts         # Tailwind configuration
```

## 🌍 Internationalization

The website supports both French and English languages with:
- Dynamic content switching
- Persistent language selection
- Responsive flag icons in navigation
- Localized contact information

## 📱 Progressive Web App (PWA)

The site includes PWA features:
- Web app manifest
- Multiple icon sizes (192x192, 512x512)
- Offline-ready structure

## 🚀 Deployment

### Kubernetes

Kubernetes manifests are included in the `manifest/` directory:

```bash
kubectl apply -k manifest/
```

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to JonDepannage.

## 📞 Support

For technical support or business inquiries:
- 📧 Technical: Create an issue on GitHub
- 📞 Business: [06 02 75 80 29](tel:+33602758029)
- 📧 Business: [jondepannage@gmail.com](mailto:jondepannage@gmail.com)
