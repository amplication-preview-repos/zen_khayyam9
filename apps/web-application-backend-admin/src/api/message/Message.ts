import { Chat } from "../chat/Chat";

export type Message = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sentByUser: string | null;
  updatedAt: Date;
};
