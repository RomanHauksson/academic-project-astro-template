import { createFontStack } from "@capsizecss/core";
import notoSans from "@capsizecss/metrics/notoSans";
import arial from "@capsizecss/metrics/arial";
const { fontFamily, fontFaces } = createFontStack([notoSans, arial]);
console.log(fontFamily);
console.log(fontFaces);
