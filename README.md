# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
"# PawPost ?? A single-owner pet shop catalog site. Customers browse pets and accessories, preview an item, and send an inquiry directly to the owner - no cart, no checkout, no payment processing. ## Status Frontend-only prototype. No backend yet. Inquiry form is stubbed locally (see TODOs in code) - it will eventually POST to `/api/inquiries` and trigger an email/Telegram notification to the owner. ## What it does - Browse all pets and accessories in a filterable grid (type + category) - Click an item to preview details (price, breed/age for pets, description) - Submit an "I'm interested" inquiry with name, contact, and an optional message - See a local confirmation once submitted ## What it deliberately doesn't do (yet) - No cart or checkout - No payment integration - No order tracking - No user accounts / login - No owner admin dashboard - No real email/Telegram delivery - the form works, the send doesn't ## Tech stack - React (Vite) - Tailwind CSS - Local component state only (`useState`) - no Redux, no router - Static mock product data, shaped like the future API response ## Design system | Token | Value | |---|---| | Pine (primary/header) | `#1F3A2E` | | Cream (background) | `#FBF7EC` | | Gold (accent/CTA) | `#E3A83B` | | Rose (category tag) | `#C97B84` | | Display type | Fraunces | | Body type | Public Sans | | Utility type | IBM Plex Mono | ## Getting started ```bash npm install npm run dev ``` ## Roadmap 1. Backend: `/api/products` + `/api/inquiries` 2. Email + Telegram notification to owner on new inquiry 3. Owner admin view for managing listings and inquiries 4. Anything else the owner wants folded in from there EOF" 
