<div align="center">

# 🚀 Next.js Bootcamp

<p>From React to full-stack production apps — learning Next.js from scratch</p>

<br/>

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

<br/><br/>

<img src="https://img.shields.io/badge/Status-In%20Progress-F59E0B?style=flat-square" />
<img src="https://img.shields.io/badge/Started-September%202026-blue?style=flat-square" />
<img src="https://img.shields.io/badge/Sections-13-8B5CF6?style=flat-square" />
<img src="https://img.shields.io/badge/Stack-Full--Stack-22C55E?style=flat-square" />

</div>

---

## 🎯 About

This repository tracks my Next.js learning journey — building on top of my **JavaScript**, **React**, and **TypeScript** foundations to learn full-stack web development with the most popular React framework.

```
Prerequisites  →  JavaScript ✅  React ✅  TypeScript ✅  Next.js 🚧
```

> **Started:** September 2026 &nbsp;|&nbsp; **Status:** 🚧 In Progress

---

## 🗂️ Repository Structure

```
nextjs-bootcamp/
│
├── 01_introduction/              # Next.js basics, first app, React vs Next.js
│
├── 02_routing/                   # App Router, layouts, dynamic & catch-all routes
│   ├── basic-routes/             # page.js and layout.js
│   ├── nested-routes/            # Nested routing
│   ├── dynamic-routes/           # [slug], [...slug], [[...slug]]
│   ├── route-groups/             # (group) folders
│   ├── private-routes/           # _private folders
│   └── metadata/                 # Metadata API, custom 404
│
├── 03_rendering/                 # SSR, CSR, SSG, ISR, hydration
│   ├── rendering-paradigms/      # SSR vs CSR
│   ├── static-dynamic/           # Static vs dynamic rendering
│   ├── ssg/                      # Static Site Generation
│   ├── isr/                      # Incremental Static Regeneration
│   └── server-client-components/ # RSC vs Client components, hydration
│
├── 04_data_fetching/             # Data fetching, state management, Redux
│   ├── server-data/              # RSC data fetching
│   ├── context-hooks/            # React hooks & Context
│   └── redux-integration/        # Redux in Next.js
│
├── 05_error_handling/            # error.js, nested errors, global error
│   ├── error-boundaries/         # error.js usage
│   ├── recovery/                 # Error recovery without reload
│   ├── nested-errors/            # Errors in nested routes
│   └── global-error/             # Global error handling
│
├── 06_styling/                   # CSS, Modules, SCSS, Tailwind v4, Images
│   ├── css-basics/               # Plain CSS in Next.js
│   ├── css-modules/              # CSS Modules
│   ├── scss/                     # SCSS setup
│   ├── tailwind-v4/              # Tailwind v4 setup
│   └── image-optimization/       # next/image
│
├── 07_backend/                   # Route Handlers, REST API, Todo CRUD
│   ├── route-handlers/           # GET, POST, PUT, DELETE
│   ├── dynamic-handlers/         # Dynamic route handlers
│   └── todo-api/                 # Full Todo REST API
│
├── 08_mongodb/                   # MongoDB + Mongoose CRUD
│   ├── connection/               # MongoDB connection
│   ├── models/                   # Mongoose models
│   └── crud/                     # Create, Read, Update, Delete
│
├── 09_authentication/            # Auth flow, cookies, sessions, hashing
│   ├── register-login/           # Register & login implementation
│   ├── cookies/                  # Working with cookies
│   ├── session-auth/             # Session-based authentication
│   ├── protected-routes/         # Protecting endpoints
│   └── password-hashing/         # bcrypt password hashing
│
├── 10_deployment/                # Vercel deployment, env vars, custom domain
│
├── 11_server_actions/            # Server Actions, Zod, useActionState
│   ├── basics/                   # What are server actions
│   ├── client-components/        # Server actions in client components
│   ├── form-validation/          # Zod validation
│   └── auth-with-actions/        # Register & login via server actions
│
├── 12_advanced/                  # Middleware, Edge Runtime, i18n, NextAuth
│   ├── middleware/               # Middleware & NextResponse
│   ├── edge-runtime/             # Edge runtime explained
│   ├── i18n/                     # Internationalization
│   └── nextauth/                 # Google login with NextAuth.js
│
├── 13_project_setup/             # ESLint, Prettier, Husky, Lint-staged
│   └── industry-setup/           # Production-grade TS project config
│
└── README.md
```

---

## 📚 Course Sections

<details>
<summary><b>Section 1 — Introduction to Next.js</b></summary>

- [ ] Course Syllabus
- [ ] What is Next.js?
- [ ] Creating Our First Next.js App
- [ ] Difference Between React.js and Next.js
</details>

<details>
<summary><b>Section 2 — Routing in Next.js</b></summary>

- [ ] Creating Routes with the App Router
- [ ] Understanding Layouts: `layout.js` and `page.js`
- [ ] Nested Routing with App Router
- [ ] Dynamic Routes and Route Groups
- [ ] Catch-All and Optional Routes
- [ ] Building Reusable Layouts using `layout.js`
- [ ] Metadata API in Next.js
- [ ] Custom 404 Page in Next.js
- [ ] What are Route Groups?
- [ ] What are Private Routes?
</details>

<details>
<summary><b>Section 3 — Rendering Paradigms in Next.js</b></summary>

- [ ] Understanding Different Rendering Paradigms (SSR & CSR)
- [ ] Static vs Dynamic Rendering
- [ ] Static Site Generation (SSG)
- [ ] Incremental Site Regeneration (ISR)
- [ ] Server Side vs Client Side Components
- [ ] Hydration Demystified
- [ ] Why Hydration Error Comes?
</details>

<details>
<summary><b>Section 4 — Data Fetching and State Management</b></summary>

- [ ] Data Fetching in the App Router
- [ ] Fetching Server-Side Data with React Server Components
- [ ] Managing State with React Hooks and Context
- [ ] Integrating Third-Party Libraries (Redux)
</details>

<details>
<summary><b>Section 5 — Error Handling in Next.js</b></summary>

- [ ] Error Handling with `error.js` File
- [ ] How to Recover from Errors Without Hard Reload?
- [ ] Error Handling in Nested Routes
- [ ] Handling Client Side Exceptions
- [ ] Global Error Handling in Next.js
</details>

<details>
<summary><b>Section 6 — Different Ways of Styling in Next.js</b></summary>

- [ ] Adding Styles Using CSS
- [ ] Using CSS Modules In Next.js
- [ ] Using SCSS In Next.js
- [ ] Setting Up Tailwind v4 In Next.js
- [ ] Setting Up Tailwind v4 In Existing Next.js Project
- [ ] Image Optimization In Next.js
</details>

<details>
<summary><b>Section 7 — Backend Development with Next.js</b></summary>

- [ ] Writing Backend Code In Next.js
- [ ] Creating `GET` Route Handler
- [ ] Dynamic Route Handler
- [ ] Understanding Request Object
- [ ] Handling `POST` Request
- [ ] Implementing Edit Todo Functionality
- [ ] Handling `DELETE` Request
- [ ] Integrating `GET` and `POST` Todo API
- [ ] Integrating `PUT` and `DELETE` Todo API
</details>

<details>
<summary><b>Section 8 — Working with MongoDB in Next.js</b></summary>

- [ ] Connecting MongoDB in Next.js
- [ ] Creating Mongoose Model
- [ ] MongoDB CRUD: Create and Read
- [ ] MongoDB CRUD: Update and Delete
</details>

<details>
<summary><b>Section 9 — Mastering Authentication in Next.js</b></summary>

- [ ] Understanding Auth Flow In Next.js
- [ ] Implementing Register User
- [ ] Working With Cookies
- [ ] Implementing Login User
- [ ] Protecting Todo Endpoints With Reusable Functions
- [ ] Signing Cookies
- [ ] Session Based Authentication
- [ ] Adding User Profile Feature
- [ ] Implementing Logout Functionality
- [ ] Hashing Passwords
</details>

<details>
<summary><b>Section 10 — Deployment and Production</b></summary>

- [ ] Preparing Our Next App for Deployment
- [ ] Managing Environment Variables
- [ ] Custom Domain Setup
</details>

<details>
<summary><b>Section 11 — Mastering Server Actions in Next.js</b></summary>

- [ ] What are Server Actions?
- [ ] Using Server Actions in Client Component
- [ ] Understanding `useActionState` Hook
- [ ] Calling Server Action Manually
- [ ] Form Validation with Zod
- [ ] Adding Register Feature Using Server Action
- [ ] Implementing Login Feature Using Server Action
- [ ] Using Server Actions without Forms
</details>

<details>
<summary><b>Section 12 — Advanced Next.js Features</b></summary>

- [ ] Understanding Middlewares in Next.js
- [ ] Rewrite a Request using NextResponse
- [ ] What is Edge Runtime in Next.js?
- [ ] Internationalization (i18n) in Next.js
- [ ] Implementing Google Login with NextAuth.js
</details>

<details>
<summary><b>Section 13 — Industry Level Project Setup with TypeScript</b></summary>

- [ ] ESLint Deep Dive with Next.js
- [ ] Using ESLint as Formatter
- [ ] Prettier Setup in Next.js
- [ ] Setting Up Lint-Staged
- [ ] Husky Pre-Commit Hook Setup
- [ ] 🎉 Course Completed
</details>

---

## ⚡ Why Next.js over React?

```
React alone                        Next.js
────────────────────────────────   ──────────────────────────────────
✗ CSR only (bad SEO)           →   ✓ SSR, SSG, ISR, CSR
✗ Manual routing setup         →   ✓ File-based routing (zero config)
✗ Need separate backend        →   ✓ Built-in API routes & Server Actions
✗ Manual image optimization    →   ✓ Automatic via next/image
✗ Manual code splitting        →   ✓ Automatic per route
✗ Poor performance defaults    →   ✓ Optimized out of the box
```

> 💡 Next.js is the **production framework** for React — it handles routing, rendering, APIs, and deployment in one package.

---

## 🛠️ Running Any Project

```bash
# Clone the repo
git clone https://github.com/prabhatyadav4/nextjs-bootcamp.git

# Navigate to a section
cd nextjs-bootcamp/02_routing/basic-routes

# Install & run
npm install
npm run dev

# App runs at → http://localhost:3000
```

### Starting a fresh Next.js project
```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev
```

---

## 🔗 My Learning Journey

| # | Bootcamp | Topics | Status |
|---|----------|--------|--------|
| 01 | [js-bootcamp](https://github.com/prabhatyadav4/js-bootcamp) | JavaScript fundamentals, DOM, async | ✅ Completed |
| 02 | [react-bootcamp](https://github.com/prabhatyadav4/react-bootcamp) | React, Hooks, Redux, Appwrite, React Router | ✅ Completed |
| 03 | [typescript-bootcamp](https://github.com/prabhatyadav4/typescript-bootcamp) | TypeScript, OOP, Generics, React TS | ✅ Completed |
| 04 | [nextjs-bootcamp](https://github.com/prabhatyadav4/nextjs-bootcamp) | Next.js, Full-stack, Auth, MongoDB, Vercel | 🚧 In Progress |

---

## 👨‍💻 Connect

**Prabhat Kumar** — CSE Student

<a href="https://github.com/prabhatyadav4">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/prabhat-kumar-95059531a">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

---

<div align="center">

⭐ **Star this repo if you find it helpful!**

*Leveling up from React to full-stack with 🚀 Next.js*

</div>