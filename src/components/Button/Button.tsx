import { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
