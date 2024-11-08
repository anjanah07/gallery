import Image from "next/image";
import React from "react";
import { getImage } from "~/server/queries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const photoIdasNum = Number(photoId);
  if (Number.isNaN(photoIdasNum)) return <div>Invalid ID</div>;
  const image = await getImage(photoIdasNum);
  if (!image || image instanceof Error) return <div>Error loading image</div>;
  return (
    <div>
      <Image
        src={image.url}
        alt={image.name}
        height={800}
        width={800}
        className="w-full"
      />
    </div>
  );
};

export default PhotoModal;
