import React from "react";
import { getImage } from "~/server/queries";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shirnk object-contain"
          // className="w-full"
        />
      </div>
      <div className="flex w-48 flex-shrink-0">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
};

export default FullPageImageViewPhoto;
