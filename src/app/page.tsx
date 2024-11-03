import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();

    return (
      <div className="grid w-auto grid-cols-3 gap-2">
        {Array.isArray(images) &&
          images.map((image) => (
            <div
              key={image.id}
              className="grid place-content-center items-center"
            >
              <img src={image.url} alt="gallery pics" />
              <div>{image.name}</div>
            </div>
          ))}
      </div>
    );
  };
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in to view your gallery
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
