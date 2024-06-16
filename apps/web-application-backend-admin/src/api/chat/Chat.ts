import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  createdByUser: string | null;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};
