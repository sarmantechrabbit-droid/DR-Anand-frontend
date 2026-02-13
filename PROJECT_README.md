# Dr. Anand - Gastro Surgeon Website

Modern, responsive React website for Dr. Anand's gastroenterology and laparoscopic surgery practice.

## Tech Stack

- **React** (JSX)
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## Features

- ✅ Fully responsive (mobile + desktop)
- ✅ Smooth scroll animations
- ✅ Modern UI/UX design
- ✅ Contact form
- ✅ Service listings
- ✅ Patient testimonials
- ✅ Mobile-friendly navigation

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with mobile menu
│   ├── Hero.jsx         # Hero section with CTA
│   ├── About.jsx        # About Dr. Anand
│   ├── Services.jsx     # Services grid
│   ├── WhyChooseUs.jsx  # Highlights section
│   ├── Testimonials.jsx # Patient reviews
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with links
├── data/
│   └── siteData.json    # All site content
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Customization

Edit `src/data/siteData.json` to update:
- Site information
- Services
- Testimonials
- Contact details
- Images

## Animations

- Fade in on scroll
- Slide animations
- Smooth transitions
- Mobile menu animations

All powered by Framer Motion.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
