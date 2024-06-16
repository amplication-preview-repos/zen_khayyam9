import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentByUser?: SortOrder;
  updatedAt?: SortOrder;
};
