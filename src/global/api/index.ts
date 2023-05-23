import axios from 'axios';

import { BASE_URL } from '../constants';

export default class Api {
  id = '';
  token = '';
  chatId = '';

  constructor(id: string, token: string, chatId: string) {
    this.id = id;
    this.token = token;
    this.chatId = chatId;
  }
  getMessage = async () => {
    await axios.get(`${BASE_URL}/waInstance${this.id}/ReceiveNotification/${this.token}`);
  };

  sendMessage = async (message: string) => {
    await axios.post(
      `${BASE_URL}/waInstance${this.id}/SendMessage/${this.token}`,
      {
        chatId: this.chatId,
        message: message,
      },
      {
        headers: {
          'Authorization': `Bearer gac.cb546085ecfd42f1a135480c82c9279e`,
          'Content-Type': 'application/json',
        },
      },
    );
  };
}
