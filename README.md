# Chaitanya Food Court — Official Website

A modern, responsive web application for **Chaitanya Food Court**, Hyderabad's authentic South & North Indian restaurant and catering service since 2008.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool & Bundler**: Vite 8
- **Icons**: Lucide React
- **Styling**: Pure CSS3 Design System with responsive layouts, CSS variables, and modern aesthetics
- **Routing**: Client-side hash routing with deep-link support (`#menu`, `#about`, `#locations`, `#catering`, etc.)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18 or newer recommended)
- npm

### 1. Install Dependencies
Open your terminal in the `Frontend` directory:
```bash
cd Frontend
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

### 3. Build for Production
To create a production-optimized build:
```bash
npm run build
```
The output will be generated inside `Frontend/dist/`.

---

## 🌐 Deployment Guide (GitHub & Vercel)

### Upload to GitHub
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Chaitanya Food Court website"
   ```
2. Create a new repository on GitHub.
3. Link and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

### Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/) and click **"Add New" -> "Project"**.
2. Select your imported GitHub repository.
3. In Project Settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `Frontend` (or use the included `vercel.json` at the root)
4. Click **Deploy**.
