export default function HomePage() {
  const mockURLS = [
    "https://utfs.io/f/N1tfczHUlMFvXkZW0ZjRU1q5FaIhcAk6ibC8QtyEWKjd3G7s",
    "https://utfs.io/f/N1tfczHUlMFvnNBKphFDsRteGSB8Xvl1nMKkYd4jUOz3AN70",
    "https://utfs.io/f/N1tfczHUlMFv3I08iSb9nhLwoYUj3AkurVKslHiqJ42mpO6d",
  ];
  const mockImages = mockURLS.map((url, index) => ({
    id: index + 1,
    url,
  }));
  //https://utfs.io/f/N1tfczHUlMFvXkZW0ZjRU1q5FaIhcAk6ibC8QtyEWKjd3G7s
  return (
    <main>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="image" width={400} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
