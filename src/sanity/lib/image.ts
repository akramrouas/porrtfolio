import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source) return builder.image('');
  return builder.image(source).auto('format').quality(80);
}

export function urlForImage(source: SanityImageSource | null | undefined) {
  return urlFor(source).url() || '/default-image.jpg';
}