export default function LocationMap() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9734475704113!2d77.61309517595994!3d12.973550087341936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17471e671d5b%3A0xfbc659bbd0197b79!2sEduecho%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1769105413699!5m2!1sen!2sin"
        className="w-full h-[300px] md:h-[640px] rounded-md"
        loading="lazy"
      />
    </div>
  );
}
