# Shagun Software Solutions — Official Website

Angular 17 standalone component website for Shagun Software Solutions Pvt. Ltd.

## 🎨 Design
- Deep brown + amber/gold brand palette
- Animated network particle canvas on hero
- Hexagonal signature motif throughout
- Fully responsive (mobile-first)
- Scroll-reveal animations

---

## 🚀 Local Development

### Prerequisites
- Node.js 18 or 20
- Angular CLI 17

### Setup
```bash
# 1. Install Angular CLI globally (first time)
npm install -g @angular/cli@17

# 2. Install dependencies
npm install

# 3. Start dev server
ng serve

# 4. Open browser
# http://localhost:4200
```

---

## 📦 Build for Production
```bash
ng build --configuration production
# Output: dist/shagun-website/browser/
```

---

## 🐙 Publish to GitHub

```bash
# 1. Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Shagun Software Solutions website"

# 2. Create repo on GitHub (github.com/new) named: shagun-website

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/shagun-website.git
git branch -M main
git push -u origin main
```

---

## ☁️ Deploy to Azure Static Web Apps

### Step 1 — Create Azure Static Web App
1. Go to [portal.azure.com](https://portal.azure.com)
2. Search for **Static Web Apps** → Click **Create**
3. Fill in:
   - **Subscription**: Your subscription
   - **Resource Group**: Create new → `shagun-rg`
   - **Name**: `shagun-website`
   - **Plan**: Free
   - **Region**: Central India (or East Asia)
   - **Source**: GitHub
4. Sign in to GitHub → Select your `shagun-website` repo, branch: `main`
5. **Build Details**:
   - Build Preset: `Angular`
   - App location: `/`
   - Output location: `dist/shagun-website/browser`
6. Click **Review + Create** → **Create**

### Step 2 — Azure Auto-Configures GitHub Actions
Azure automatically adds `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your GitHub repo
and the workflow in `.github/workflows/` will auto-deploy on every push to `main`.

### Step 3 — Verify Deployment
- Go to your Azure Static Web App resource
- Click the **URL** shown (e.g., `https://proud-sea-xxx.azurestaticapps.net`)
- ✅ Your site is live!

### Step 4 — Custom Domain (Optional)
In Azure Portal → Your Static Web App → **Custom domains** → Add `www.shagunsolutions.com`
- Add the CNAME record shown at your domain registrar

---

## 📁 Project Structure

```
shagun-website/
├── src/
│   ├── app/
│   │   ├── app.component.ts          # Root component + scroll reveal
│   │   └── components/
│   │       ├── navbar/               # Fixed navbar with scroll state
│   │       ├── hero/                 # Animated canvas + hero section
│   │       ├── about/                # Vision, Mission, Values
│   │       ├── services/             # 6 service cards grid
│   │       ├── solutions/            # 5 solution area items
│   │       ├── why-choose/           # Reasons list + quote panel
│   │       ├── tech-stack/           # Technology cards
│   │       ├── contact/              # Contact form + info
│   │       └── footer/               # Full footer
│   ├── styles.css                    # Global styles + CSS variables
│   └── index.html
├── public/
│   └── staticwebapp.config.json      # Azure routing config
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml # CI/CD pipeline
└── angular.json
```

---

## 🔧 Customization

### Update Contact Info
Edit `src/app/components/contact/contact.component.ts`

### Update Colors
Edit CSS variables in `src/styles.css` (`:root` block)

### Add Real Form Submission
Replace the `submitForm()` method in `contact.component.ts` with an EmailJS or backend API call.

---

## 📞 Contact
- Website: www.shagunsolutions.com  
- Email: shagun.technologies9@gmail.com  
- Phone: +91 9676745458  
- Location: Nuzvid, Andhra Pradesh, India
