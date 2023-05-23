import { useState } from 'react';

import { Button } from '../../components/Button';
import { useStore } from '../../global/store';
import styles from './Chat.module.scss';

export const Chat = () => {
  const store = useStore();
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    store.chatController?.sendMessage(inputValue);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}></div>
      <div className={styles.textareaWrapper}>
        <textarea
          className={styles.textarea}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
      </div>
      <div>
        <Button onClick={sendMessage}>Отправить</Button>
      </div>
    </div>
  );
};
