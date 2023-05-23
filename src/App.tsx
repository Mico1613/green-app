import { observer } from 'mobx-react-lite';

import styles from './App.module.scss';
import { Loader } from './components/Loader';
import { PagesMap } from './global/constants';
import { Store, StoreContext, useStore } from './global/store';

const Content = observer(() => {
  const store = useStore();

  if (!store.currentPage) {
    return <Loader />;
  }

  return PagesMap[store.currentPage];
});

function App() {
  const store = new Store();

  return (
    <StoreContext.Provider value={store}>
      <div className={styles.appLayout}>
        <Content />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
