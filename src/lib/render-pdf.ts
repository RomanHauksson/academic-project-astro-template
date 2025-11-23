import { promises as fs } from "fs";
import { pdf } from "pdf-to-img";
import sizeOf from "image-size";

export async function renderPDF(inputFilePath: string): Promise<ImageMetadata> {
  const inputFileName = inputFilePath.split("/").pop();
  const fullPath = `./src/pages/${inputFilePath}`;

  // Convert PDF to image with 4x scale (matching previous implementation)
  const document = await pdf(fullPath, {
    scale: 2,
  });

  // Get the first page
  const image = await document.getPage(1);

  // Get image dimensions using image-size (much lighter than sharp)
  const dimensions = sizeOf(image);
  const width = dimensions.width;
  const height = dimensions.height;

  // Ensure directories exist before writing the file
  const outputDir = `./dist/_astro`;
  await fs.mkdir("./dist", { recursive: true });
  await fs.mkdir(outputDir, { recursive: true });

  // Write the image to disk
  await fs.writeFile(`${outputDir}/${inputFileName}.png`, image);

  let src: string;

  // If running astro build, env.PROD is true
  if (import.meta.env.PROD) {
    src = `_astro/${inputFileName}.png`;
  } else {
    src = `../dist/_astro/${inputFileName}.png`;
  }

  return {
    src: src,
    width: width,
    height: height,
    format: "png",
  };
}
