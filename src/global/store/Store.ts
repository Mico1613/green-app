import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

import { PagesEnum } from '../constants';
import { Pages } from '../types';
import { ChatController } from './controllers/ChatController';

export class Store {
  private _idInstance = '';
  private _apiTokenInstance = '';
  private _currentPage: Pages | null = null;
  private _phone = '';
  chatController: ChatController | null = null;

  constructor() {
    makeAutoObservable(this);
    this.setCurrentPage(PagesEnum.AUTH);
  }

  get idInstance() {
    return this._idInstance;
  }

  setIdInstance(id: string) {
    this._idInstance = id;
  }

  get apiTokenInstance() {
    return this._apiTokenInstance;
  }

  setApiToken(token: string) {
    this._apiTokenInstance = token;
  }

  get currentPage() {
    return this._currentPage;
  }

  setCurrentPage(page: Pages) {
    this._currentPage = page;
  }

  get phone() {
    return this._phone;
  }

  setPhone(phone: string) {
    this._phone = phone;
  }

  get personalId() {
    return `${this._phone}@c.us`;
  }

  initChat() {
    this.chatController = new ChatController(
      this.idInstance,
      this.apiTokenInstance,
      this.personalId,
    );
  }
}

export const StoreContext = createContext<Store | null>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Store not found');
  return store;
};
