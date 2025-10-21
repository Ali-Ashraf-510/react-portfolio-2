# Deployment Guide

This guide will help you deploy your React portfolio to popular hosting platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy a Vite + React app.

### Method 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Environment Variables**: Add `VITE_API_URL` in Vercel dashboard if using backend.

---

## 🌐 Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Drag and Drop

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

### Method 3: GitHub Integration

1. Push to GitHub
2. Go to Netlify dashboard
3. Click "New site from Git"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

---

## 📄 GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

3. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings (select gh-pages branch)

---

## ☁️ AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Create S3 bucket and enable static website hosting

3. Upload `dist` contents to S3

4. Create CloudFront distribution pointing to S3 bucket

5. Update DNS to point to CloudFront URL

---

## 🔧 Pre-Deployment Checklist

- [ ] Update profile information in `src/data/profile.json`
- [ ] Add your projects in `src/data/projects.json`
- [ ] Add your certificates in `src/data/certificates.json`
- [ ] Replace placeholder images with your actual images
- [ ] Update social media links
- [ ] Test contact form
- [ ] Update meta tags in `index.html`
- [ ] Update page titles in each page component
- [ ] Test responsiveness on mobile/tablet/desktop
- [ ] Run `npm run build` to check for errors
- [ ] Test the production build locally with `npm run preview`
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records or use Netlify DNS

### GitHub Pages
1. Add a `CNAME` file in the `public` folder with your domain
2. Update DNS:
   - Type: A
   - Name: @
   - Value: GitHub Pages IPs (check GitHub docs)
3. Enable HTTPS in repository settings

---

## 📊 Analytics Setup

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)

2. Add to `index.html` before closing `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🔒 Environment Variables

For production deployment with a backend API:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://api.yourwebsite.com
   ```

2. Add environment variables in your hosting platform:
   - **Vercel**: Project Settings > Environment Variables
   - **Netlify**: Site Settings > Build & Deploy > Environment
   - **GitHub Pages**: Use GitHub Secrets for builds

---

## 🐛 Troubleshooting

### Routing Issues (404 on page refresh)

Add `_redirects` file in `public` folder:
```
/* /index.html 200
```

Or for Netlify, create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Build Errors

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version (use Node 18+ recommended)

3. Run `npm run build` locally to see detailed errors

---

## 📱 Performance Optimization

Before deploying:

1. **Optimize images**: Use WebP format, compress images
2. **Code splitting**: Already handled by Vite
3. **Lazy loading**: Implement for images
4. **Caching**: Configure in your hosting platform
5. **CDN**: Most platforms provide this automatically

---

## ✅ Post-Deployment

1. Test all pages and links
2. Verify contact form works
3. Check mobile responsiveness
4. Test in different browsers
5. Verify meta tags using [Meta Tags](https://metatags.io/)
6. Check performance with [Lighthouse](https://developers.google.com/web/tools/lighthouse)
7. Submit sitemap to Google Search Console
8. Set up monitoring and uptime checks

---

**Need help?** Check the hosting platform's documentation or community forums.
