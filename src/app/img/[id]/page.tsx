import React from "react";
import FullPageImageViewPhoto from "~/components/full-image-page";

const PhotoPage = ({ params: { id: photoId } }: { params: { id: string } }) => {
  const photoIdasNum = Number(photoId);
  if (Number.isNaN(photoIdasNum)) return <div>Invalid ID</div>;
  return <FullPageImageViewPhoto id={photoIdasNum} />;
};

export default PhotoPage;
