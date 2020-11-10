import React, { FC, useEffect, useState } from 'react';

import { ParallaxComponent } from './parallax.component';

interface IProps {
  className?: string;
}

export const Parallax: FC<IProps> = ({ className }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const mouseMoveHandler = (event: MouseEvent): void => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return <ParallaxComponent mouseX={mouseX} mouseY={mouseY} className={className} />;
};
