import Image from "next/image";
import dashImg from "@/public/images/header_performaceImg.png";

export default function Home() {
  return (
    <div>
      <div className="h-dvh">
        <div className="flex w-full h-full ">
          <div className="w-1/2 bg-white flex flex-col gap-8 justify-center items-center">
            <div className="p-28">
              <h2 className="text-bluish-purple font-bold leading-16 text-5xl">
                Your Next Performance Management Platform
              </h2>
              <p className="text-bluish-grey mt-8">
                Fully Customizable performance management platform that suits
                your culture. not the other way around
              </p>
            </div>
            <div className="flex">
              

            </div>
          </div>
          <div className="w-1/2 bg-light-ash flex justify-end items-end">
            <div>
              <Image src={dashImg} className="w-[100%]" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
