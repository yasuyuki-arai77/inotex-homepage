export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/header-bg.jpg')" }}
    >
      <h1 className="text-5xl font-bold drop-shadow">INOTEX JAPAN</h1>
      <p className="text-xl mt-4 drop-shadow">
        室内装飾・裏装・資材・繊維 製造販売
      </p>
    </section>
  );
}