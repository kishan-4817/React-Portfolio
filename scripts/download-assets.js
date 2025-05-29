import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = [
    'src/assets/images/tech',
    'src/assets/images/projects'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Download file function
const downloadFile = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(destination, () => reject(err));
    });
  });
};

// Tech stack icons to download
const techIcons = {
  'wordpress.svg': 'https://cdn.simpleicons.org/wordpress/21759B',
  'php.svg': 'https://cdn.simpleicons.org/php/777BB3',
  'mysql.svg': 'https://cdn.simpleicons.org/mysql/4479A1',
  'acf.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg',
  'shopify.svg': 'https://cdn.simpleicons.org/shopify/95BF47',
  'liquid.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/shopify/shopify-original.svg',
  'javascript.svg': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'react.svg': 'https://cdn.simpleicons.org/react/61DAFB',
  'framer-motion.svg': 'https://cdn.simpleicons.org/framer/FF0055',
  'firebase.svg': 'https://cdn.simpleicons.org/firebase/FFCA28',
  'typescript.svg': 'https://cdn.simpleicons.org/typescript/3178C6',
  'css.svg': 'https://cdn.simpleicons.org/css3/1572B6',
  'tailwind.svg': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'nextjs.svg': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'mongodb.svg': 'https://cdn.simpleicons.org/mongodb/47A248',
  'docker.svg': 'https://cdn.simpleicons.org/docker/2496ED',
  'git.svg': 'https://cdn.simpleicons.org/git/F05032',
  'python.svg': 'https://cdn.simpleicons.org/python/3776AB',
  'nodejs.svg': 'https://cdn.simpleicons.org/nodedotjs/339933'
};

// Project images to download
const projectImages = {
  'wordpress-project.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'ecommerce.jpg': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  'shopify-store.jpg': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  'portfolio.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'task-manager.jpg': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'fashion-store.jpg': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
};

// Main function to download all assets
const downloadAssets = async () => {
  try {
    console.log('Creating directories...');
    createDirectories();

    console.log('Downloading tech stack icons...');
    for (const [filename, url] of Object.entries(techIcons)) {
      const destination = path.join('src/assets/images/tech', filename);
      console.log(`Downloading ${filename}...`);
      await downloadFile(url, destination);
    }

    console.log('Downloading project images...');
    for (const [filename, url] of Object.entries(projectImages)) {
      const destination = path.join('src/assets/images/projects', filename);
      console.log(`Downloading ${filename}...`);
      await downloadFile(url, destination);
    }

    console.log('All assets downloaded successfully!');
  } catch (error) {
    console.error('Error downloading assets:', error);
  }
};

// Run the script
downloadAssets(); 