import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getMyImages = async () => {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};
export const getImage = async (id: number) => {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (modal, { eq }) => eq(modal.id, id),
  });
  if (!image) throw new Error("Image not found");
  if (image.userId !== user.userId) {
    throw new Error("Incorrect user");
  }
  return image;
};
export const deleteImage = async (id: number) => {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  redirect("/");

  // revalidatePath("/");
};
