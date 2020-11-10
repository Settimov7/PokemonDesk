import styles from './styles/button.styles.scss';

export const ButtonType = {
  SUBMIT: 'submit',
  RESET: 'reset',
  BUTTON: 'button',
} as const;

export const ButtonColor = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export const ButtonColorToCSSColorClassName = {
  [ButtonColor.PRIMARY]: styles.buttonPrimary,
  [ButtonColor.SECONDARY]: styles.buttonSecondary,
};

export const ButtonSize = {
  SMALL: 'small',
  DEFAULT: 'default',
} as const;

export const ButtonSizeToCSSSizeClassName = {
  [ButtonSize.SMALL]: styles.buttonSmall,
  [ButtonSize.DEFAULT]: styles.buttonDefault,
};
