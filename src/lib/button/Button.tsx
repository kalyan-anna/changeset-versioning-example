import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
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
