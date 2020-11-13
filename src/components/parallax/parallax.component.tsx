import React, { FC, useRef } from 'react';
import classNames from 'classnames';

import styles from './styles/parallax.styles.scss';

interface IProps {
  mouseX: number;
  mouseY: number;
  className?: string;
}

export const ParallaxComponent: FC<IProps> = ({ mouseX, mouseY, className }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const componentStyleName = classNames(className, styles.parallax);
  const elementStyleObject = elementRef?.current?.style;

  if (elementStyleObject) {
    elementStyleObject.setProperty('--mouse-x', `${mouseX}px`);
    elementStyleObject.setProperty('--mouse-y', `${mouseY}px`);
  }

  return <div className={componentStyleName} ref={elementRef} />;
};
