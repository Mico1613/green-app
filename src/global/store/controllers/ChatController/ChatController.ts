import { makeAutoObservable } from 'mobx';

import Api from '../../../api';

export class ChatController {
  api: Api;
  messages = [];

  constructor(idInstance: string, apiToken: string, personalId: string) {
    makeAutoObservable(this);

    this.api = new Api(idInstance, apiToken, personalId);
  }

  async getMessage() {
    await this.api.getMessage();
  }

  async sendMessage(message: string) {
    await this.api.sendMessage(message);
  }
}
