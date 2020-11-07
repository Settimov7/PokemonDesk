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

export const ButtonColorToCssColorClassName = {
  [ButtonColor.PRIMARY]: styles.buttonPrimary,
  [ButtonColor.SECONDARY]: styles.buttonSecondary,
};
