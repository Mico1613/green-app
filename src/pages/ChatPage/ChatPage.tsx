import { observer } from 'mobx-react-lite';

import { useStore } from '../../global/store';
import { Chat } from '../../modules/Chat';
import { CreateChat } from '../../modules/CreateChat';
import styles from './ChatPage.module.scss';

export const ChatPage = observer(() => {
  const store = useStore();
  return (
    <div className={styles.chatPageWrapper}>
      <CreateChat />
      {store.phone && <Chat />}
      {/*<Chat />*/}
    </div>
  );
});
