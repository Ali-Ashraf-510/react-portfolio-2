# 🚀 Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ Installation

```bash
# Install dependencies
npm install
```

## 🎯 Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📝 Customization Steps

### 1. Update Your Profile (5 min)

Edit `src/data/profile.json`:
- Add your name, title, and bio
- Update contact information (email, phone, location)
- Add your social media links (GitHub, LinkedIn, Twitter)
- List your skills by category
- Add work experience and education

### 2. Add Your Projects (10 min)

Edit `src/data/projects.json`:
- Replace sample projects with your own
- Add project images (or use placeholder URLs temporarily)
- Include GitHub repository links
- Add live demo URLs
- Mark your best projects as `featured: true`

### 3. Add Your Certificates (10 min)

Edit `src/data/certificates.json`:
- Add your certifications and achievements
- Include issuer and completion dates
- Categorize by topic (Web Development, Data Science, etc.)
- Add verification links if available

### 4. Add Your Images (15 min)

1. **Profile Photo**: Add to `src/assets/images/profile.jpg`
2. **Hero Photo**: Add to `src/assets/images/hero.jpg`
3. **Project Screenshots**: Add to `src/assets/images/projects/`
4. **Certificates**: Add to `src/assets/images/certs/`

Update image URLs in JSON files to point to your images:
```json
"image": "/src/assets/images/profile.jpg"
```

Or use online hosting (imgur, cloudinary, etc.):
```json
"image": "https://yourcdn.com/image.jpg"
```

### 5. Customize Colors (Optional - 5 min)

Edit `tailwind.config.js` to change theme colors:

```javascript
colors: {
  primary: {
    // Your main color
    600: '#your-color',
  },
  accent: {
    // Your accent color
    600: '#your-color',
  },
}
```

### 6. Update SEO Meta Tags (5 min)

Edit `index.html`:
- Update page title
- Update meta description
- Update Open Graph tags
- Update Twitter card tags

## 🧪 Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## ✅ Final Checklist

Before deploying:
- [ ] Updated all personal information
- [ ] Added real projects with images
- [ ] Added certificates
- [ ] Replaced placeholder images
- [ ] Updated social media links
- [ ] Tested contact form
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Updated meta tags
- [ ] Ran production build successfully

## 🆘 Common Issues

### Port 3000 already in use
```bash
# Kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3001
```

### Images not loading
- Make sure image paths are correct
- Use absolute URLs for external images
- Check file names match exactly (case-sensitive)

### Contact form not working
- The form works in demo mode by default
- See `server-example.js` for backend setup
- Or use a service like Formspree or EmailJS

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## 💬 Need Help?

Check:
1. README.md for detailed information
2. DEPLOYMENT.md for deployment help
3. Comments in the code
4. Component documentation

---

**Happy coding! 🎉**
