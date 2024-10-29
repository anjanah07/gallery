import { db } from "~/server/db";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="grid w-auto grid-cols-3 gap-2">
        {[...images, ...images, ...images].map((image) => (
          <div
            key={image.id}
            className="grid place-content-center items-center"
          >
            <img src={image.url} alt="gallery pics" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
