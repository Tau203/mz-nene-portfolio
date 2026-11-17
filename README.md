# Mzikayise Nene — Professional Portfolio

React + TypeScript + Vite. Free hosting on GitHub Pages, deployed automatically by GitHub Actions.

## 1. Install and run locally
Requires Node.js 20+.
```
npm install
npm run dev        # http://localhost:5173
```
## 2. Build and test production
```
npm run build
npm run preview
```
## 3. Upload to GitHub
1. Create a repository on github.com. For the address `https://USERNAME.github.io/` name it exactly `USERNAME.github.io`. Any other name also works (`https://USERNAME.github.io/repo-name/`) — no code changes needed, paths are relative.
2. In this folder:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
## 4. Turn on GitHub Pages
Repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do this once. Every push to `main` then rebuilds and deploys (watch the **Actions** tab). You can also run it manually via **Actions → Deploy to GitHub Pages → Run workflow**.

## 5. Update content
Everything is in `src/data/data.ts`: contact details, jobs, projects, skills, certificates.

## 6. CV (REQUIRED before sharing)
Put a PDF named `Mzikayise_Nene_Professional_CV.pdf` in `public/documents/` (a placeholder is there now). **Do not use the original CV**: it contains his ID/birth date, home address and personal reference phone numbers. Remove those first.

## 7. Certificate scans (optional)
The "View certificate" button only appears for a certificate that has an `image` set in `data.ts`. The originals show his ID number, so first redact it (cover it with a solid box and export as a flattened image, not a PDF with a layer), save to `public/certificates/`, then add e.g. `image: 'certificates/fall-arrest.png'`. Never put the original PDF in `public/`.

## 8. Photos
Add a licensed or own photo to `public/images/` and set `heroImage: 'images/hero.jpg'` in `data.ts`. Do not use photos copied from other companies' websites.
