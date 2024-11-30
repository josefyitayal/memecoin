import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col gap-3 bg-red-500 w-full p-5 sm:p-7">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-white">
          MISSING DOG
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-white">
          A cry for help for our furry friend
        </p>
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex flex-col md:flex-row gap-2 py-8 w-full px-10">
        {/* Image Section */}
        <div className="flex-[1] flex justify-center">
          <Image
            src={"/photo_2024-11-30_12-09-33.jpg"}
            alt="image"
            width={700}
            height={700}
            className="h-[300px] sm:h-[400px] md:h-[500px] w-[200px] sm:w-[250px] md:w-[300px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-[0.7] flex flex-col gap-5 pt-10 md:pt-20">
          <h2 className="text-red-500 font-bold text-2xl sm:text-3xl md:text-4xl">
            Mia
          </h2>
          <Link
            href={"https://t.me/mialostdog"}
            className="flex gap-2 items-center"
          >
            {/* <Image
              src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000"
              alt="telegram"
              width={50}
              height={50}
              className=""
            /> */}
            <p className="underline text-blue-500">Telegram </p>
          </Link>
          <div className="bg-red-500 w-full h-2 sm:h-3"></div>
          <p className="text-sm sm:text-base md:text-lg">
            Mia, a timid four-month-old dog, is missing. She was last seen
            wearing a pink and blue harness on the field behind Borodino, in the
            area of the private sector. If you have any information about her
            whereabouts
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3 bg-red-500 w-full p-5 sm:p-7 mt-auto">
        <p className="text-base sm:text-lg md:text-xl text-center text-white">
          call or text
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-white">
          0664296575
        </h1>
      </div>
    </div>
  );
}
