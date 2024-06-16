import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "uploadedByUser";

export const MediaTitle = (record: TMedia): string => {
  return record.uploadedByUser?.toString() || String(record.id);
};
