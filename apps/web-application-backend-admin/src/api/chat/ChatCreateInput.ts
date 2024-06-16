import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  createdByUser?: string | null;
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
  name?: string | null;
};
