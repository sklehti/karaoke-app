import { z } from "zod";
import { Playlist } from "./types";

const KeyTypeSchema = z.union([
  z.literal("-2"),
  z.literal("-1"),
  z.literal("0"),
  z.literal("+1"),
  z.literal("+2"),
]);

const PlaylistSchema: z.ZodType<Playlist> = z.object({
  id: z.number(),
  name: z.string(),
  track: z.string(),
});

export const FormInfoSchema = z.object({
  name: z.string().min(2),
  faceImage: z.string().optional(),
  track: PlaylistSchema,
  keyValue: KeyTypeSchema,
  acceptCheckbox: z.literal(true),
});

const MAX_FILE_SIZE = 5000000;
function checkFileType(file: File) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();

    if (
      fileType === "jpeg" ||
      fileType === "jpg" ||
      fileType === "png" ||
      fileType === "webp"
    )
      return true;
  }
  return false;
}

export const FileSchema = z.object({
  faceImg: z
    .any()
    .refine((file) => file?.lenght !== 0)
    .refine((file) => file?.size < MAX_FILE_SIZE)
    .refine((file) => checkFileType(file)),
});
