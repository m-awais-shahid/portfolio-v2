# Portfolio Pokemon - Developer Portfolio Website

A modern, responsive portfolio website built with React featuring a unique Pokemon card-inspired design and a comprehensive developer showcase.

## 🚀 Features

### 🎨 Design & Theme
- **Pokemon Card Inspired Design** - Unique profile card with Pokemon-style layout
- **Midnight Blue Developer Theme** - Professional tech-focused color scheme
- **Minecraft Font** - Custom typography throughout the site
- **Dark/Light Mode Toggle** - Seamless theme switching with persistence
- **Responsive Design** - Optimized for all device sizes

### 📱 Sections
- **Introduction** - Pokemon card profile with About Me section
- **Work Experience** - Professional experience with technology highlights
- **Education** - Academic background and achievements
- **Projects** - Featured projects with live demos and GitHub links
- **Skills** - Technical skills and expertise areas
- **Languages** - Language proficiency levels
- **Contact Info** - Social media links and contact methods

### 🛠️ Technical Features
- **Smooth Scrolling Navigation** - Left-side navigation with active section highlighting
- **Dynamic Backgrounds** - Unique gradient backgrounds for each section
- **Interactive Elements** - Hover effects, transitions, and animations
- **Theme Persistence** - User preferences saved in localStorage
- **Optimized Performance** - Clean, efficient code with minimal dependencies

## 🎯 Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with CSS Variables
- **Font**: Custom Minecraft Font
- **Icons**: Custom SVG icons
- **Build Tool**: Create React App
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/m-awais-shahid/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio-pokemon
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
cd portfolio-pokemon
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Portfolio Pokemon/
├── portfolio-pokemon/        # Main React application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Introduction/ # Pokemon card & About Me
│   │   │   ├── WorkExperience/ # Work experience section
│   │   │   ├── Education/    # Education section
│   │   │   ├── Projects/     # Projects showcase
│   │   │   ├── Skills/       # Skills section
│   │   │   ├── Languages/    # Language proficiency
│   │   │   ├── ContactInfo/  # Contact information
│   │   │   ├── Navigation/   # Left-side navigation
│   │   │   └── Shared/       # Shared components
│   │   ├── data/             # Portfolio data
│   │   │   └── portfolioData.json
│   │   ├── styles/           # CSS styles
│   │   │   ├── themes.css    # Main theme system
│   │   │   └── Introduction/ # Pokemon card styles
│   │   └── public/           # Static assets
│   │       ├── fonts/        # Custom fonts
│   │       ├── icons/        # Custom icons
│   │       └── Introduction-Background.jpg
│   └── package.json
└── README.md                 # This file
```

## 🎨 Customization

### Updating Portfolio Data
Edit `portfolio-pokemon/src/data/portfolioData.json` to update:
- Personal information
- Work experience
- Education details
- Projects
- Skills
- Languages
- Contact information

### Theme Customization
Modify `portfolio-pokemon/src/styles/themes.css` to customize:
- Color schemes
- Typography
- Spacing
- Component styles

### Adding New Sections
1. Create component in appropriate folder
2. Add to `portfolio-pokemon/src/components/index.js`
3. Import and use in `portfolio-pokemon/src/App.js`
4. Add navigation item in `portfolio-pokemon/src/components/Navigation/Navigation.js`

## 🌟 Key Features Explained

### Pokemon Card Design
The profile section features a unique Pokemon trading card-inspired layout with:
- Card borders that change color based on theme
- Pokemon-style attack descriptions for skills
- Authentic card layout and styling

### Theme System
Comprehensive CSS variable system supporting:
- Light and dark modes
- Consistent color palette
- Smooth transitions
- Responsive design

### Navigation
Left-side fixed navigation with:
- Smooth scrolling to sections
- Active section highlighting
- Responsive positioning

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project is ready for deployment on any static hosting service:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the build folder
- **AWS S3**: Upload the build folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muhammad Awais Shahid**
- GitHub: [@m-awais-shahid](https://github.com/m-awais-shahid)
- LinkedIn: [Awais Shahid](https://www.linkedin.com/in/awais-shahid/)
- Xing: [Awais Shahid](https://www.xing.com/profile/Awais_Shahid059038)

## 🙏 Acknowledgments

- Pokemon Company for design inspiration
- React community for excellent documentation
- Create React App team for the amazing tooling

---

⭐ If you found this project helpful, please give it a star!