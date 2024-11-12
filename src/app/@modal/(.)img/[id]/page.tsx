import React from "react";
import Modal from "./modal";
import FullPageImageViewPhoto from "~/components/full-image-page";

const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const photoIdasNum = Number(photoId);
  if (Number.isNaN(photoIdasNum)) return <div>Invalid ID</div>;
  console.log("Anj is in parallel route page.tsx");
  return (
    <Modal>
      <FullPageImageViewPhoto id={photoIdasNum} />
    </Modal>
  );
};

export default PhotoModal;
