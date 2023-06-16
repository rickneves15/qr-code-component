import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center p-7">
      <div className="flex flex-col items-center bg-white rounded-2xl p-4 desktop:w-[320px]">
        <div className="relative w-[290px] h-[290px] desktop:w-[280px]  desktop:min-h-[280px]">
          <Image
            src="/image-qr-code.png"
            alt="QR Code"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col px-5 pt-5 text-center">
          <h1 className="font-bold text-xl color-dark-blue">
            Improve your front-end skills by building projects
          </h1>
          <p className=" color-grayish-blue py-5">
            Scan th QR code to visit Frontend Mentor and take your coding skills
            to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
