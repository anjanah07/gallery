import Image from "next/image";
import React from "react";
import { getImage } from "~/server/queries";
import Modal from "./modal";
import { Dialog } from "~/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

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
    <Modal>
      <img
        src={image.url}
        alt={image.name}
        className="w-96"
        // className="w-full"
      />
    </Modal>
  );
};

export default PhotoModal;
