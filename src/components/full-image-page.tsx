import React from "react";
import { getImage } from "~/server/queries";

const FullPageImageViewPhoto = async (props: { id: number }) => {
  const image = await getImage(props.id);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  return (
    <img
      src={image.url}
      alt={image.name}
      className="w-96"
      // className="w-full"
    />
  );
};

export default FullPageImageViewPhoto;
