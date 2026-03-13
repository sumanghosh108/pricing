You are a senior frontend engineer and static-site architecture expert.

Build a **modern pricing webpage using Astro + TailwindCSS** designed to be deployed on **GitHub Pages under the subdomain ****`pricing.sumannaba.in`**.

The page must be **fully static, responsive, SEO-friendly, and optimized for GitHub Pages deployment**.

---

# Project Stack

Framework:

* Astro

Styling:

* TailwindCSS

Hosting:

* GitHub Pages

Deployment:

* GitHub Actions

Output type:

* Static site

---

# Page Structure

The website should include the following sections.

---

# 1. Navbar

Create a responsive navbar with:

Left side:

* Logo text: **Sumannaba**

Right side:

* Home
* Pricing
* Help

Behavior:

When clicking **Help**, redirect to:

https://connect.sumannaba.in

Use:

```html
<a href="https://connect.sumannaba.in">
```

Navbar should be:

* sticky
* minimal
* modern
* responsive

---

# 2. Hero Section

Title:

Pricing Plans

Subtitle:

Choose the right plan for your needs.

Design:

* centered layout
* modern gradient background
* large typography

---

# 3. Pricing Cards Section

Create **4 pricing cards** arranged in a responsive grid.

Cards:

1️⃣ Normal
2️⃣ Premium
3️⃣ Exclusive
4️⃣ Custom

Each card must include:

* Plan name
* Price position showing:

```
Coming Soon
```

* Feature list
* CTA button

Example card content:

Normal Plan
Features:

* Basic Access
* Community Support
* Limited Features

Premium Plan
Features:

* Priority Support
* Advanced Tools
* Extended Features

Exclusive Plan
Features:

* All Premium Features
* Dedicated Support
* Early Feature Access

Custom Plan
Features:

* Tailored Solutions
* Enterprise Integration
* Dedicated Support

Design requirements:

* card hover animation
* rounded corners
* subtle shadows
* responsive grid
* highlight Premium plan as recommended

---

# 4. Footer

Footer must contain:

* Copyright text
* Donation button

Donation button text:

Donate

When clicked it redirects to:

```
/payment
```

Use placeholder link:

```
https://sumannaba.in/payment
```

Design:

* centered
* clean
* minimal
* dark footer background

---

# Design Requirements

Use a **modern developer-style UI** similar to:

* Stripe pricing page
* Vercel pricing layout

Include:

* smooth hover effects
* modern spacing
* large readable typography
* subtle gradients
* mobile-first responsive design

---

# Project Structure

astro-pricing-page/

```
astro-pricing-page
│
├─ public
│
├─ src
│  ├─ components
│  │   Navbar.astro
│  │   PricingCard.astro
│  │   Footer.astro
│  │
│  ├─ layouts
│  │   BaseLayout.astro
│  │
│  └─ pages
│      index.astro
│
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ package.json
```

---

# Astro Configuration

Configure for GitHub Pages deployment.

astro.config.mjs:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://pricing.sumannaba.in",
  output: "static"
});
```

---

# GitHub Actions Deployment

Create file:

```
.github/workflows/deploy.yml
```

Workflow must:

* trigger on push to `main`
* install dependencies
* build Astro
* deploy to GitHub Pages

Example:

```yaml
name: Deploy Pricing Page

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - uses: actions/deploy-pages@v4
```

---

# SEO

Add:

* meta tags
* OpenGraph tags
* favicon
* page title:

```
Pricing | Sumannaba
```

---

# Output Requirements

Generate:

1. Complete Astro project code
2. All components
3. Tailwind styling
4. Responsive pricing cards
5. GitHub Actions deployment workflow

Ensure the code is clean, modular, and production-ready.
