# SIA Zyvex - Corporate Website

A modern, responsive, and performance-optimized static single-page corporate website for SIA Zyvex, a European trading and distribution company based in Latvia.

## 🚀 Features

- **Fully Responsive Design**: Fluid and dynamic layout that automatically adapts from 4K desktop screens down to mobile phones using Tailwind CSS.
- **Interactive Mobile Navigation**: A custom-built hamburger dropdown menu for seamless mobile browsing.
- **Functional Contact Form**: Integrated with [Web3Forms](https://web3forms.com/) for silent, backend-less email submission via AJAX.
- **Performance Optimized**: 
  - CSS and JavaScript are separated into clean `static/` directories.
  - Image lazy-loading (`loading="lazy"`) to heavily reduce initial bandwidth.
  - JavaScript scroll-event throttling via `requestAnimationFrame` for a smooth 60fps experience.
- **SEO Ready**: Configured with meta descriptions and OpenGraph tags to rank well on search engines and look great when shared on social media.

## 🛠 Tech Stack

- **HTML5** & **CSS3**
- **JavaScript (Vanilla/ES6)**
- **Tailwind CSS** (via CDN for rapid deployment without a build step)
- **Lucide Icons** (for lightweight, scalable vector icons)
- **Web3Forms API** (for handling form submissions without a backend server)

## 🎨 Design & Branding

- **Typography**: The primary font family is `Inter` (sans-serif), imported seamlessly via Google Fonts.
- **Primary Brand Colors**:
  - **Dark Navy Blue**: `#0a192f` (used for the "SIA" text in the header and core typography).
  - **Gold**: `#d4af37` (used for the "ZYVEX" text via the custom `.accent-gold` class and general highlights).
- **Logo Configuration**:
  - **Header Logo**: Normal case "SIA", uppercase "ZYVEX" (`text-2xl font-bold tracking-tight text-[#0a192f]`, `.accent-gold`).
  - **Footer Logo**: All uppercase "SIA ZYVEX" (`text-2xl font-black tracking-widest text-[#d4af37]`).

## 📂 File Structure

```text
Sia_Zyvex/
├── index.html              # The main single-page application structure
├── README.md               # Project documentation
└── static/
    ├── css/
    │   └── style.css       # Custom scrollbars, hero animations, and Tailwind overrides
    ├── img/                # All static image assets (favicon, backgrounds, product photos)
    └── js/
        └── main.js         # Mobile menu toggle, sticky nav highlighting, and AJAX form submission
```

## ⚙️ How to Run & Deploy

This project is built using pure **static frontend technologies** (HTML/CSS/JS). There is no required Node.js backend or build step.

### Local Development
To view the site locally, simply double-click the `index.html` file to open it in your web browser. 

*(Optional: For the best experience, you can serve the directory using a live server extension in VS Code or running `npx serve` / `python3 -m http.server` in your terminal).*

### Production Deployment
Since there is no backend, deployment is instant and practically free. You can host this directory on:
- **Netlify** or **Vercel** (Drag-and-drop the folder directly into their web interface)
- **GitHub Pages** (Push the repository to GitHub and enable Pages in the repo settings)
- **Any Standard Web Host** (cPanel, HostGator, Hostinger by uploading the folder via FTP)

## 📧 Form Configuration (Web3Forms)

The "Send Message" contact form at the bottom of the page securely transmits emails directly to the owner without exposing server credentials.

To change the destination email address in the future:
1. Go to [Web3Forms](https://web3forms.com/) and generate a free Access Key for your new email address.
2. Open `index.html` and locate the hidden input field inside the `<form id="contact-form">`:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```
3. Replace the `value` attribute with your newly generated key. The custom AJAX JavaScript in `main.js` will handle the rest silently.
