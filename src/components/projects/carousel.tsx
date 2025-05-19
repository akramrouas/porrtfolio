"use client";

import { Loader } from "lucide-react";
import Image from "next/image";
import { FC, useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt?: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Gestion des images vides
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p>Aucune image à afficher</p>
      </div>
    );
  }

  // Vérification de l'URL de l'image
  const getSafeUrl = (url: string) => {
    try {
      new URL(url);
      return url;
    } catch {
      return '/default-image.jpg'; // Image de repli
    }
  };

  // Navigation clavier
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setCurrentIndex(index);
    }
  };
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);
  
  // Corriger animate-spin
  <Loader className="animate-spin" />

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative aspect-video w-full max-h-[30rem] bg-gray-100 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        <Image
          src={getSafeUrl(images[currentIndex].src)}
          width={800}
          height={450}
          alt={images[currentIndex].alt || 'Image principale'}
          className={`object-contain w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          priority
        />
      </div>

      {/* Miniatures */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all ${
              currentIndex === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-label={`Afficher l'image ${index + 1}`}
          >
            <Image
              src={getSafeUrl(image.src)}
              fill
              alt={image.alt || `Miniature ${index + 1}`}
              className="object-cover"
              sizes="(max-width: 768px) 100px, 150px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;