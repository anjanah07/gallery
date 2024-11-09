import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { getImage } from "~/server/queries";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  const user = await clerkClient.call(this);
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
      </div>
    </div>
  );
};

export default FullPageImageViewPhoto;
