import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PagesEnum } from '../../global/constants';
import { useStore } from '../../global/store';
import { Form } from '../../modules/Form';
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const store = useStore();
  const [inputValues, setInputValues] = useState({
    id: '',
    token: '',
  });

  const notify = () => toast('Введите корректные данные', { toastId: 'id' });

  const submit = () => {
    if (inputValues.id && inputValues.token) {
      store.setIdInstance(inputValues.id);
      store.setApiToken(inputValues.token);
      store.setCurrentPage(PagesEnum.CHAT);
      return;
    }
    notify();
  };
  return (
    <div className={styles.wrapper}>
      <Form>
        <>
          <Input
            label="Введите id"
            onChange={(e) => setInputValues((prev) => ({ ...prev, id: e.target.value }))}
          />
          <Input
            label="Введите токен"
            onChange={(e) => setInputValues((prev) => ({ ...prev, token: e.target.value }))}
          />
          <Button onClick={submit}>Войти</Button>
        </>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnHover={false}
        limit={1}
      />
    </div>
  );
};
