import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export const getMyImages = async () => {
  const user = await auth();
  if (!user.userId) return new Error("Unauthorized");
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};
export const getImage = async (id: number) => {
  const user = await auth();
  if (!user.userId) return new Error("Unauthorized");
  const image = await db.query.images.findFirst({
    where: (modal, { eq }) => eq(modal.id, id),
  });
  if (!image) return new Error("Image not found");
  if (image.userId !== user.userId) return new Error("Incorrect user");
  return image;
};
