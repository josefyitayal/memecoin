import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-3 bg-red-500 w-full p-7">
        <h1 className="text-5xl sm:text-7xl font-bold text-center text-white">
          MISSING DOG
        </h1>
        <p className="text-xl text-center text-white">
          A cry for help for our furry friend
        </p>
      </div>
      <div className="flex gap-3 w-full px-10">
        <div className="flex-[1] flex justify-center">
          <Image
            src={"/photo_2024-11-30_12-09-33.jpg"}
            alt="image"
            width={700}
            height={700}
            className="h-[500px] w-[300px] object-cover"
          />
        </div>
        <div className="flex-[0.7] flex flex-col gap-5 pt-20">
          <h2 className="text-red-500 font-bold text-3xl">Mia</h2>
          <div className="bg-red-500 w-full h-3"></div>
          <p className="text-md sm:text-text-lg">
            Mia, a timid four-month-old dog, is missing. She was last seen
            wearing a pink and blue harness on the field behind Borodino, in the
            area of the private sector. If you have any information about her
            whereabouts
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-red-500 w-full p-7">
        <p className="text-xl text-center text-white">call or text</p>
        <h1 className="text-7xl font-bold text-center text-white">
          0664296575
        </h1>
      </div>
    </div>
  );
}
