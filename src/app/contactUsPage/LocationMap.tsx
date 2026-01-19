export default function LocationMap() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps?q=Rajanakunte,Bangalore&output=embed"
        className="w-full h-[300px] md:h-[640px] rounded-md"
        loading="lazy"
      />
    </div>
  );
}
