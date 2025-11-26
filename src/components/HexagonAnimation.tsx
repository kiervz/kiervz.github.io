import { useEffect } from 'react';
import * as anime from 'animejs';
import { Icons } from './Icons';

interface HexagonAnimationProps {
  setLoading: (value: boolean) => void;
}

const HexagonAnimation = ({ setLoading }: HexagonAnimationProps) => {
  useEffect(() => {
    // Get all paths and set up stroke dashoffset
    const paths = document.querySelectorAll('#hexagon path');
    const logoText = document.querySelector('#logo-text') as HTMLElement;

    // Hide text initially
    if (logoText) {
      logoText.style.opacity = '0';
    }

    paths.forEach((path) => {
      const pathElement = path as SVGPathElement;
      const pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${pathLength}`;
      pathElement.style.strokeDashoffset = `${pathLength}`;
    });

    // First animation: stroke drawing
    anime.animate('#hexagon path', {
      strokeDashoffset: [anime.get('#hexagon path', 'strokeDashoffset'), 0],
      duration: 2000,
      ease: 'inOut(4)',
      delay: anime.stagger(250),
      onComplete: () => {
        // Second animation: text fade in
        anime.animate('#logo-text', {
          opacity: [0, 1],
          duration: 1000,
          ease: 'inOut(4)',
          onComplete: () => {
            // Third animation: scale down
            anime.animate('#hexagon', {
              scale: [1, 0],
              duration: 800,
              ease: 'inOutBack',
              onComplete: () => setLoading(false),
            });
          },
        });
      },
    });
  }, [setLoading]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#08192e]">
      <style>{`
        #hexagon path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        #logo-text {
          opacity: 0;
        }
      `}</style>
      <div className="w-max max-w-[100px]">
        <Icons.logo />
      </div>
    </div>
  );
};

export default HexagonAnimation;
