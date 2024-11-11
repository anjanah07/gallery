"use client";

import { useUploadThing } from "~/utils/uploadthing";

type Input = Parameters<typeof useUploadThing>;
const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);
    console.log("uploaded files", result);
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

const SimpleUpladButton = () => {
  return (
    <div>
      <button type="button"> Upload</button>
    </div>
  );
};
export default SimpleUpladButton;
