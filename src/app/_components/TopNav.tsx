import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SimpleUpladButton from "./simple-upload-button";

export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
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
