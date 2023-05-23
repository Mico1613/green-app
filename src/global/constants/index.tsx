import { AuthPage } from '../../pages/AuthPage';
import { ChatPage } from '../../pages/ChatPage';

export const PagesMap = {
  AuthPage: <AuthPage />,
  ChatPage: <ChatPage />,
};

export enum PagesEnum {
  AUTH = 'AuthPage',
  CHAT = 'ChatPage',
}

export const PHONE_MASK = '+7 (000) 000-00-00';
export const PHONE_PLACEHOLDER = '+7 (999) 123-45-67';

export const BASE_URL = 'http://localhost:8010/proxy';
