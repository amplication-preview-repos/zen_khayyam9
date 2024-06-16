import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  uploadedByUser?: SortOrder;
  url?: SortOrder;
};
