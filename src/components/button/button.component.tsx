import React, { FC } from 'react';
import classNames from 'classnames';
import { A } from 'hookrouter';

import {
  ButtonColor,
  ButtonColorToCSSColorClassName,
  ButtonSize,
  ButtonSizeToCSSSizeClassName,
  ButtonType,
} from './button.constants';

import { ValueOf } from '../../types';

import styles from './styles/button.styles.scss';

interface IProps {
  href?: string;
  color?: ValueOf<typeof ButtonColor>;
  type?: ValueOf<typeof ButtonType>;
  size?: ValueOf<typeof ButtonSize>;
  isBlock?: boolean;
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  href,
  color = ButtonColor.PRIMARY,
  type = ButtonType.BUTTON,
  size = ButtonSize.DEFAULT,
  isBlock = false,
  className = '',
}) => {
  const colorClassName = ButtonColorToCSSColorClassName[color];
  const sizeClassName = ButtonSizeToCSSSizeClassName[size];
  const componentClassName = classNames(className, styles.button, colorClassName, sizeClassName, {
    [styles.buttonBlock]: isBlock,
  });

  if (href) {
    return (
      <A className={componentClassName} href={href}>
        {children}
      </A>
    );
  }

  return (
    <button className={componentClassName} type={type}>
      {children}
    </button>
  );
};
