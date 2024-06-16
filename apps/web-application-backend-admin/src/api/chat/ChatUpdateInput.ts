import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  createdByUser?: string | null;
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
  name?: string | null;
};
