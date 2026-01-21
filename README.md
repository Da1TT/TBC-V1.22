# Tour & Business in China

A professional ground services website for international visitors to China, offering tour guides, exhibition support, and customized travel solutions.

## Deployment to Cloudflare Pages

### Prerequisites
- A Cloudflare account
- Git installed on your local machine
- Node.js 18 or later

### Steps to Deploy

1. **Fork the Repository**
   If you haven't already, fork the repository to your GitHub account.

2. **Sign in to Cloudflare**
   Go to [Cloudflare](https://dash.cloudflare.com/) and sign in to your account.

3. **Create a New Project**
   - Navigate to the "Pages" section in your Cloudflare dashboard
   - Click on "Create a project"
   - Connect your GitHub account if prompted
   - Select the repository you want to deploy

4. **Configure Build Settings**
   - **Framework preset:** None (Manual configuration)
   - **Build command:** `npm run build:cloudflare`
   - **Build output directory:** `dist`
   - **Environment variables:**
     - Add `NODE_VERSION` and set it to `18`

5. **Deploy Site**
   Click on "Save and Deploy" to start the deployment process.

### Post-Deployment Configuration

After successful deployment, consider configuring:

1. **Custom Domain**
   - In the Pages project settings, navigate to "Custom domains"
   - Follow the instructions to add your domain

2. **Edge Functions**
   - For advanced use cases, you can add Cloudflare Edge Functions
   - Create a `functions` directory at the root of your project

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable UI components
  - `contexts/` - React Context providers
  - `hooks/` - Custom React hooks
  - `pages/` - Page components
  - `lib/` - Utility functions
- `public/` - Static assets
- `dist/` - Build output directory

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Framer Motion