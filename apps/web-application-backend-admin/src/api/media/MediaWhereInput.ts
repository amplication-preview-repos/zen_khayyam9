import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  uploadedByUser?: StringNullableFilter;
  url?: StringNullableFilter;
};
