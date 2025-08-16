# 🚀 React + Vite + TypeScript + Tailwind Template

A modern frontend starter template with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**, including **Redux Toolkit**, **React Router**, and developer-friendly tooling out of the box.

---

## 📦 Features

- ⚡ **Vite 7** — lightning fast dev server and build tool
- 🧩 **React 19 + TypeScript** — modern React with type safety
- 🎨 **Tailwind CSS 4 + Shadcn** — utility-first styling and components
- 🗂️ **Redux Toolkit** — state management setup included
- 🛣️ **React Router v7** — routing preconfigured
- 🧹 **ESLint + Prettier** — linting, formatting, and Tailwind sorting
- ✅ **Vitest + Testing Library** — unit and component testing ready
- 🔄 **CI/CD GitHub Workflow** — lint, tests, dependency audit, circular deps check
- 🔔 **React Toastify** — notification system
- 🎭 **Lucide Icons** — beautiful icons with React

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/typescript-react-tailwind-vite.git
cd typescript-react-tailwind-vite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App will be available at [http://localhost:5173](http://localhost:5173).

---

## 📜 Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Type-check and build for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier
- `npm run test` — Run tests in watch mode
- `npm run test-no-watch` — Run tests once with coverage
- `npm run check-circular-deps` — Check for circular imports

---

## 🧪 Testing

This template uses **Vitest** + **@testing-library/react**:

```bash
npm run test
```

For coverage report:

```bash
npm run test-no-watch
```

---

## ⚙️ GitHub Actions (CI/CD)

This template comes with a GitHub workflow: **On commit checks** ✅

- **Unit Tests** → Runs Vitest test suite
- **ESLint** → Enforces code style
- **Circular Dependencies** → Uses `madge` to detect circular imports
- **NPM Audit** → Scans for security vulnerabilities

CI runs on every push to any branch.

---

## 🏗️ Project Structure

```
src/
  components/   # Shared UI components
  hooks/        # Custom hooks
  pages/        # Route-based pages
  store/        # Redux slices & store config
  styles/       # Tailwind base & config
  main.tsx      # Entry point
  App.tsx       # App root with Router
```

---

## 🎨 Styling

- **Tailwind CSS** with `prettier-plugin-tailwindcss` for class sorting
- **Shadcn** for ready-to-use components
- **clsx + tailwind-merge** for conditional class merging

---

## 🔧 Tooling

- **ESLint** — with React, Hooks, and Storybook plugins
- **Prettier** — with Tailwind class sorting
- **Vitest** — testing framework with `happy-dom`
- **Redux Toolkit** — opinionated state management
- **React Hook Form** — forms made simple

---

## 🚀 Deployment

Build the app for production:

```bash
npm run build
```

Then serve with any static host (e.g., Netlify, Vercel, GitHub Pages).

---

## 📄 License

MIT © Ahmed Dghaies
