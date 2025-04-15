import Image from "next/image";
import dashImg from "@/public/images/header_performaceImg.png"

export default function Home() {
  return (
    <div>
      <div className="flex w-full h-[700px]">
        <div className="w-1/2 bg-white">
          <div>
            <h2 className="text-[#323F73]">
              Your Next Performance Management Platform
            </h2>
            <p className="text-[#95AFBA]">
              Fully Customizable performance management platform that suits your
              culture. not the other way around
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-[#EDEFF5] flex justify-end items-end">
        <div>
          <Image src={dashImg} alt="img" />
        </div>
        </div>
      </div>
    </div>
  );
}
