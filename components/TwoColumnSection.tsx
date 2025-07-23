export function TwoColumnSection({
  imageSrc,
  title,
  text,
  reverse = false,
}: {
  imageSrc: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center py-16 px-6`}> 
      <img src={imageSrc} alt={title} className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow" />
      <div className="md:w-1/2 md:px-12 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4 text-neutral-800 drop-shadow-md">{title}</h2>
        <p className="text-lg leading-relaxed text-neutral-700">{text}</p>
      </div>
    </section>
  );
}