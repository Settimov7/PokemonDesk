import React, { FC } from 'react';
import classNames from 'classnames';

import {
  HeadingLevel,
  HeadingFontSize,
  HeadingFontWeight,
  HeadingFontSizeToCSSFontSizeClassName,
  HeadingFontWeightToCSSFontWeightClassName,
} from './heading.constants';
import { ValueOf } from '../../types';

import styles from './styles/heading.styles.scss';

interface IProps {
  level: ValueOf<typeof HeadingLevel>;
  fontSize?: ValueOf<typeof HeadingFontSize>;
  fontWeight?: ValueOf<typeof HeadingFontWeight>;
  className?: string;
}

export const HeadingComponent: FC<IProps> = ({
  level,
  className,
  children,
  fontSize = HeadingFontSize.L,
  fontWeight = HeadingFontWeight.NORMAL,
}) => {
  const headingType = `h${level}`;
  const fontSizeClassName = HeadingFontSizeToCSSFontSizeClassName[fontSize];
  const fontWeightClassName = HeadingFontWeightToCSSFontWeightClassName[fontWeight];
  const componentClassName = classNames(className, fontSizeClassName, fontWeightClassName, styles.heading);
  const props = {
    className: componentClassName,
  };

  return React.createElement(headingType, props, children);
};
