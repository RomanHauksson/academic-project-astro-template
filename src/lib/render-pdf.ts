// https://github.com/mozilla/pdf.js/blob/master/examples/node/pdf2png/pdf2png.mjs

import fs from "fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export async function renderPDF(inputFilePath: string): Promise<ImageMetadata> {
  const inputFileName = inputFilePath.split("/").pop();

  const data = new Uint8Array(fs.readFileSync("./src/pages/" + inputFilePath));

  // Where the standard fonts are located.
  const STANDARD_FONT_DATA_URL =
    "../../node_modules/pdfjs-dist/standard_fonts/";

  const loadingTask = getDocument({
    data,
    standardFontDataUrl: STANDARD_FONT_DATA_URL,
  });
  const pdfDocument = await loadingTask.promise;
  const page = await pdfDocument.getPage(1);
  const viewport = page.getViewport({ scale: 4 });
  const width = viewport.width;
  const height = viewport.height;

  // Render the page on a Node canvas with 400% scale.
  const canvasFactory = pdfDocument.canvasFactory as any;
  const canvasAndContext = canvasFactory.create(width, height);
  const renderContext = {
    canvasContext: canvasAndContext.context,
    viewport,
    canvas: canvasAndContext.canvas,
  };

  const renderTask = page.render(renderContext);
  await renderTask.promise;

  // Convert the canvas to an image buffer.
  const image = canvasAndContext.canvas.toBuffer("image/png");

  // Ensure directories exist before writing the file
  const outputDir = `./dist/_astro`;
  if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist", { recursive: true });
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFile(`${outputDir}/${inputFileName}.png`, image, function (error) {
    if (error) {
      console.error("Error: " + error);
    }
  });

  // Release page resources.
  page.cleanup();

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
