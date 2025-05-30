import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectImages = [
  {
    name: 'moviesverse.jpg',
    url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    description: 'Movie theater seats in dark room'
  },
  {
    name: 'mohna-global.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Modern office building with glass windows'
  },
  {
    name: 'kscheema.jpg',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    description: 'University campus with modern architecture'
  },
  {
    name: 'todo-app.jpg',
    url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    description: 'Clean desk with notebook and pen'
  },
  {
    name: 'shopify-fashion.jpg',
    url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    description: 'Modern fashion store interior'
  },
  {
    name: 'shopify-electronics.jpg',
    url: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80',
    description: 'Modern electronics store display'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'public/assets/images/projects', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  try {
    // Create projects directory if it doesn't exist
    const projectsDir = path.join(__dirname, 'public/assets/images/projects');
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
    }

    // Download all images
    for (const image of projectImages) {
      await downloadImage(image.url, image.name);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages(); 