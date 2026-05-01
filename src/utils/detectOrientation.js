import { images } from '../data/images';

function detectOrientation(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (img.height > img.width) resolve('portrait');
      else resolve('landscape');
    };
  });
}

async function run() {
  const updated = await Promise.all(
    images.map(async (img) => {
      const category = await detectOrientation(img.src);
      return { ...img, category };
    })
  );

  console.log(JSON.stringify(updated, null, 2));
}

run();