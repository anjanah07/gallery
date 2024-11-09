import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { getImage } from "~/server/queries";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  const user = await clerkClient.call(this);
  const userInfo = await user.users.getUser(String(image.userId));
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-1/2 flex-shrink">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shirnk object-contain"
        />
      </div>
      <div className="flex w-1/2 flex-shrink-0 flex-col gap-2 border-l">
        <div className="p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col">
          <span>Uploaded By :{userInfo.fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default FullPageImageViewPhoto;
