import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import { ButtonColor, ButtonColorToCssColorClassName, ButtonType } from './button.constants';

import { ValueOf } from '../../types';

import styles from './styles/button.styles.scss';

interface IProps {
  href?: string;
  color?: ValueOf<typeof ButtonColor>;
  type?: ButtonHTMLAttributes<HTMLBodyElement>['type'];
  isBlock?: boolean;
  isSmall?: boolean;
  className?: string;
}

export const Button: FC<IProps> = ({
  children,
  href,
  color = ButtonColor.PRIMARY,
  type = ButtonType.BUTTON,
  isBlock = false,
  isSmall = false,
  className = '',
}) => {
  const colorClassName = ButtonColorToCssColorClassName[color];
  const componentClassName = classNames(className, styles.button, colorClassName, {
    [styles.buttonBlock]: isBlock,
    [styles.buttonSmall]: isSmall,
  });

  if (href) {
    return (
      <a className={componentClassName} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={componentClassName} type={type}>
      {children}
    </button>
  );
};
