"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import SimpleUpladButton from "./simple-upload-button";

export const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flwx-row flex items-center justify-center gap-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUpladButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
