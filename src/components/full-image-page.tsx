import React from "react";
import { getImage } from "~/server/queries";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  return (
    <div className="flex h-full w-full bg-green-500">
      <div className="flex items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="object-contain"
          // className="w-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
};

export default FullPageImageViewPhoto;
