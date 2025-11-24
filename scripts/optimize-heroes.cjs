const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs-extra");
const path = require("path");
const slugify = require("slugify");

const sizes = [480, 768, 1024, 1440, 1920];
const srcDir = "src/assets/hero";
const outBase = "public/optimized/hero";

// Optional explicit mapping (if your filenames are not descriptive).
// Example: "1.jpg": { slug: "timeless-design" }
const mapTitles = {
  "1.jpg": { slug: "timeless-design" },
  "2.jpg": { slug: "form-and-functionality" },
  "3.jpg": { slug: "sustainable-aesthetics" },
  "4.png": { slug: "photorealistic-rendering" },
};

(async () => {
  try {
    await fs.ensureDir(outBase);
    const files = glob.sync(`${srcDir}/*.{jpg,jpeg,png}`, { nodir: true });
    if (!files.length) {
      console.error("No hero images found in", srcDir);
      process.exit(1);
    }

    console.log(`Found ${files.length} hero image(s). Processing...`);

    for (const f of files) {
      const fname = path.basename(f);
      const meta = mapTitles[fname] || {};
      const baseName = fname.replace(/\.[^.]+$/, "");
      const slug =
        meta.slug || slugify(baseName, { lower: true, strict: true });

      console.log("Processing:", fname, "-> slug:", slug);

      for (const w of sizes) {
        const webpOut = path.join(outBase, `hero-${slug}-${w}.webp`);
        await sharp(f)
          .resize({ width: w })
          .webp({ quality: 70 })
          .toFile(webpOut);

        const jpgOut = path.join(outBase, `hero-${slug}-${w}.jpg`);
        await sharp(f)
          .resize({ width: w })
          .jpeg({ quality: 78, progressive: true })
          .toFile(jpgOut);
      }

      // tiny blurred placeholder
      const placeholderOut = path.join(outBase, `hero-${slug}-placeholder.jpg`);
      await sharp(f)
        .resize(20)
        .blur(1)
        .jpeg({ quality: 45 })
        .toFile(placeholderOut);
    }

    console.log("Done. Optimized images written to:", outBase);
  } catch (err) {
    console.error("Error during image optimization:", err);
    process.exit(1);
  }
})();
