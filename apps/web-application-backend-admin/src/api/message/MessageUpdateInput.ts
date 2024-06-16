import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
  sentByUser?: string | null;
};
