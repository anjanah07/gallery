import React from "react";

export const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  return <div>{photoId}</div>;
};
