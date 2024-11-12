import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  console.log("Anj is in full image page");
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Image not found</div>;
  const user = await clerkClient();
  const userInfo = await user.users.getUser(String(image.userId));

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-grow items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-64 flex-shrink-0 flex-col gap-2 border-l p-4">
        <div className="border-b pb-2 text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By :</span>
          <span>{userInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created on :</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <form
          action={async () => {
            "use server";
            await deleteImage(image.id);
            redirect("/");
          }}
        >
          <div className="p-2">
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FullPageImageViewPhoto;
