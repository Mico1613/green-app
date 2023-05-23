import { ChangeEvent, forwardRef } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, label, placeholder }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} onChange={onChange} ref={ref} placeholder={placeholder} />
      </div>
    );
  },
);
