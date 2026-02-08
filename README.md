# ThetaSecure Documentation Site

A Docusaurus-powered documentation site for the ThetaSecure IAM platform.

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm start
```

The site will be available at `http://localhost:3000`.

## Build for Production

```bash
npm run build
```

The static output will be in the `build/` directory.

## Deploy to Cloudflare Pages (Free + Custom Domain)

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project** → Connect to Git
4. Select your repo
5. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Node version**: `18`
6. Click **Deploy**
7. Add your custom domain in Cloudflare Pages settings

### Option 2: Vercel (Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. It will auto-detect Docusaurus
4. Add your custom domain in project settings

### Option 3: Netlify (Free)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
4. Add custom domain in site settings

### Option 4: GitHub Pages (Free)

1. Push to GitHub
2. Update `docusaurus.config.js`:
   ```js
   url: 'https://yourusername.github.io',
   baseUrl: '/thetasecure-docs/',
   ```
3. Run: `GIT_USER=<username> npm run deploy`
4. Configure custom domain in repo Settings → Pages

## Custom Domain Setup

For any hosting provider, you'll need to:

1. Add a **CNAME** record at your DNS provider pointing `docs.thetasecure.com` to the hosting provider's domain
2. Enable **SSL/TLS** (usually automatic with free hosting providers)
3. Wait for DNS propagation (up to 24 hours)

## Project Structure

```
thetasecure-docs/
├── docs/
│   ├── getting-started/     # Setup and login guides
│   ├── dashboard/           # Dashboard walkthroughs
│   └── configuration/       # Config & settings guides
├── src/
│   ├── css/custom.css       # ThetaSecure branded styling
│   └── pages/index.js       # Landing page
├── static/img/
│   ├── screenshots/         # Product screenshots
│   └── logo.svg             # ThetaSecure logo
├── docusaurus.config.js     # Site configuration
├── sidebars.js              # Documentation sidebar
└── package.json
```

## Customization

- **Branding**: Edit `src/css/custom.css` to change colors
- **Navigation**: Edit `sidebars.js` to add/reorganize pages
- **Site settings**: Edit `docusaurus.config.js` for title, URL, navbar, footer
- **Logo**: Replace `static/img/logo.svg` with your actual logo
