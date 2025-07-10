# 🍜 noodleUI

> **Build breathtaking, production-ready UIs faster with advanced modular design, theming, and scalability at its core.**

---

## 🚀 Highlights

* **Complex, layered component architecture** with hooks, context, and utility-first theming.
* **Theming system with token-based design and CSS variable injection.**
* **Full dark mode with adaptive color scaling.**
* **Component slotting and advanced composition patterns.**
* **Motion-friendly with framer-motion support.**
* **Shadcn, Radix, and Tailwind synergy for clean, scalable design.**

---

## 📦 Installation

```bash
pnpm add noodle-ui
# or
npm install noodle-ui
# or
yarn add noodle-ui
```

---

## 🛠️ Quick Start

```jsx
import { Button, Card, Input } from "noodle-ui";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Card className="p-6 space-y-4 max-w-sm w-full">
        <h1 className="text-2xl font-bold">noodleUI 🍜</h1>
        <Input placeholder="Your email..." />
        <Button variant="gradient">Join Now</Button>
      </Card>
    </main>
  );
}
```

---

## 🎨 Theming System

* Token-based color system.
* Supports Tailwind theme extension.
* Easily adaptable to your brand palette.
* Nested theme providers for per-page theming.

---

## 🧩 Advanced Components

* Dynamic cards with slot-based composition.
* Modal, toast, and drawer systems.
* Advanced forms with validation hooks.
* Command palettes and search overlays.
* Animated skeleton loaders and shimmers.
* Draggable/resizable utilities.

---

## 🛠️ Developer Experience

* Written in **JavaScript** with strict types.
* Tree-shakable and lightweight.
* Utilizes **Radix UI primitives** for accessibility.
* Framer Motion support for seamless animations.
* Compatible with Next.js, Vite, Remix, and Astro.

---

## 🌟 Contributing

Contributions are welcome to extend, optimize, and refine noodleUI.

```bash
git clone https://github.com/AnugrahAsh/noodleUI.git
cd noodleUI
pnpm install
pnpm dev
```

Visit `http://localhost:5173` to preview your changes.

---

## 📜 License

MIT © [Anugrah Sharma](https://anugrah.me)

---

## 🌌 Why noodleUI?

* **Aesthetic first with flexibility.**
* Power user configurations for advanced projects.
* Perfect for building **real SaaS products, dashboards, and landing pages**.
* Use as a foundation for your design system.

> ⚡ If you love it, star the repo and share your builds!
