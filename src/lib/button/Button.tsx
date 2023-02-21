import { FunctionalComponent, h } from 'preact';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const Button: FunctionalComponent<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
