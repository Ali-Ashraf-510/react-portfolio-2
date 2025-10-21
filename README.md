# React Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features 5 main pages showcasing projects, certifications, skills, and a contact form.

## 🚀 Features

- **5 Pages**: Home, About, Projects, Certificates, Contact
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern UI**: Clean design with Tailwind CSS
- **React Router**: Client-side routing for smooth navigation
- **Form Validation**: Contact form with react-hook-form + yup validation
- **SEO Friendly**: Meta tags and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Fast loading with Vite
- **JSON Data**: Easy content management with JSON files

## 📁 Project Structure

```
/src
  /assets
    /images
  /components
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    ProjectCard.jsx
    CertificateCard.jsx
    ContactForm.jsx
    SkillList.jsx
  /pages
    Home.jsx
    About.jsx
    Projects.jsx
    Certificates.jsx
    Contact.jsx
  /data
    projects.json
    certificates.json
    profile.json
  /utils
    api.js
    validators.js
  App.jsx
  main.jsx
  index.css
```

## 🛠️ Tech Stack

- **Frontend**: React 18.3
- **Build Tool**: Vite 5
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS 3
- **Form Handling**: react-hook-form + yup
- **Validation**: @hookform/resolvers

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Profile Information

Edit `src/data/profile.json` to update your personal information, skills, experience, and education.

### Add Projects

Edit `src/data/projects.json` to add or modify projects. Each project should have:
- `id`: Unique identifier
- `title`: Project name
- `description`: Brief description
- `image`: Project thumbnail URL
- `technologies`: Array of tech stack
- `github`: GitHub repository URL
- `demo`: Live demo URL (optional)
- `featured`: Boolean for featured projects

### Add Certificates

Edit `src/data/certificates.json` to add or modify certificates. Each certificate should have:
- `id`: Unique identifier
- `title`: Certificate name
- `issuer`: Issuing organization
- `date`: Completion date
- `category`: Certificate category
- `image`: Certificate image URL
- `link`: Verification link (optional)
- `description`: Brief description

### Change Colors

Edit `tailwind.config.js` to customize the color scheme. The theme uses:
- `primary`: Main brand color (currently blue)
- `accent`: Secondary color (currently purple)

### Add Your Images

Replace placeholder images in the JSON files with your actual images:
1. Add images to `src/assets/images/`
2. Update image URLs in JSON files to point to your images

## 🔧 Environment Variables

For the contact form to work with a backend, create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

## 📝 Backend Setup (Optional)

The contact form currently works without a backend (demo mode). To set up a real backend:

1. Create a Node.js server with Express and Nodemailer
2. Set up the `/api/contact` endpoint
3. Update the `VITE_API_URL` environment variable
4. Uncomment the error handling in `ContactForm.jsx`

Example backend code is provided in the project requirements.

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
1. Update `vite.config.js` with your repo name as base
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Built with ❤️ using React and Tailwind CSS
