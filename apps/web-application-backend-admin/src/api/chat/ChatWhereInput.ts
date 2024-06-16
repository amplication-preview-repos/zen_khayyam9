import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  createdByUser?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
};
