import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useIMask } from 'react-imask';
import { toast, ToastContainer } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PHONE_MASK, PHONE_PLACEHOLDER } from '../../global/constants';
import { unmaskPhone } from '../../global/helpers';
import { useStore } from '../../global/store';
import { Form } from '../Form';

export const CreateChat = observer(() => {
  const store = useStore();
  const [inputValue, setInputValue] = useState('');
  const { ref } = useIMask({ mask: PHONE_MASK });

  const notify = () => toast('Введите корректный номер', { toastId: 'id' });

  const submit = () => {
    const unmaskedPhone = unmaskPhone(inputValue);
    if (unmaskedPhone.length < 11) {
      notify();
      return;
    }
    store.setPhone(unmaskedPhone);
    store.initChat();
  };

  return (
    <>
      <Form>
        <>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            label="Введите номер телефона, чтобы создать чат"
            ref={ref}
            placeholder={PHONE_PLACEHOLDER}
          />

          <Button onClick={submit} disabled={!!store.phone}>
            Создать чат
          </Button>
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
    </>
  );
});
