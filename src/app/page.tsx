import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();

    return (
      <div className="grid w-auto grid-cols-3 gap-2 p-4">
        {Array.isArray(images) &&
          [...images, ...images, ...images].map((image) => (
            <div
              key={image.id}
              className="grid place-content-center items-center"
            >
              <Link href={`/img/${image.id}`}>
                <Image
                  src={image.url}
                  alt={image.name}
                  style={{ objectFit: "contain" }}
                  width={400}
                  height={400}
                />
                <div>{image.name}</div>
              </Link>
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
