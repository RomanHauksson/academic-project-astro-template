import { createFontStack } from '@capsizecss/core';
import ptSerif from '@capsizecss/metrics/ptSerif.js';
import timesNewRoman from '@capsizecss/metrics/timesNewRoman.js';

const { fontFaces } = createFontStack([ptSerif, timesNewRoman]);
console.log(fontFaces);