import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen p-4">
      <div className="flex flex-col max-w-full max-h-full justify-center bg-white rounded-md p-4">
        <div className="relative w-[290px] h-[290px] max-w-[290px] max-h-[290px]">
          <Image
            src="/image-qr-code.png"
            alt="QR Code"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan th QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
