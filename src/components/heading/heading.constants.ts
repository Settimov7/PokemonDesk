import styles from './styles/heading.styles.scss';

export const HeadingLevel = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  SIXTH: 6,
} as const;

export const HeadingFontSize = {
  XXL: 'xxl',
  XL: 'xl',
  L: 'l',
  M: 'm',
  S: 's',
  XS: 'xs',
} as const;

export const HeadingFontSizeToCSSFontSizeClassName = {
  [HeadingFontSize.XXL]: styles.headingFontSizeXxl,
  [HeadingFontSize.XL]: styles.headingFontSizeXl,
  [HeadingFontSize.L]: styles.headingFontSizeL,
  [HeadingFontSize.M]: styles.headingFontSizeM,
  [HeadingFontSize.S]: styles.headingFontSizeS,
  [HeadingFontSize.XS]: styles.headingFontSizeXs,
};

export const HeadingFontWeight = {
  NORMAL: 'normal',
  BOLD: 'bold',
} as const;

export const HeadingFontWeightToCSSFontWeightClassName = {
  [HeadingFontWeight.NORMAL]: styles.headingFontWeightNormal,
  [HeadingFontWeight.BOLD]: styles.headingFontWeightBold,
};
