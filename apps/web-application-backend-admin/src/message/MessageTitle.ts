import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "sentByUser";

export const MessageTitle = (record: TMessage): string => {
  return record.sentByUser?.toString() || String(record.id);
};
