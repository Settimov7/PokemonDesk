import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles/parallax.styles.scss';

interface IProps {
  mouseX: number;
  mouseY: number;
  className?: string;
}

export const ParallaxComponent: FC<IProps> = ({ mouseX, mouseY, className }) => {
  const componentStyleName = classNames(className, styles.parallax);
  const style = {
    ['--mouse-x' as any]: `${mouseX}px`,
    ['--mouse-y' as any]: `${mouseY}px`,
  };

  return <div style={style} className={componentStyleName} />;
};
