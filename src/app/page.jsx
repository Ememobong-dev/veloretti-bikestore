import Image from "next/image";
import dashImg from "@/public/images/header_performaceImg.png";
import headerShow from "@/public/images/header-showBrand.png";
import dash1 from "@/public/images/dash1.png";
import goal_manage from "@/public/images/goal_manage.png";
import performace_rev from "@/public/images/performace-rev.png";
import remoter_tool from "@/public/images/remoter-tool.png";
import dash1 from "@/public/images/dash1.png";
import mailIcon from "@/public/icons/mail.svg";

export default function Home() {
  return (
    <div>
      <div className="h-dvh">
        <div className="flex w-full h-[70%]  ">
          <div className="w-[60%] bg-white flex flex-col gap-8 justify-center items-center">
            <div className="min-[1400px]:p-28 p-10">
              <h2 className="text-bluish-purple font-bold leading-16 text-5xl">
                Your Next Performance Management Platform
              </h2>
              <p className="text-bluish-grey mt-8">
                Fully Customizable performance management platform that suits
                your culture. not the other way around
              </p>

              <div className="flex w-full mt-14">
                <div className="flex items-center gap-5 px-8 py-4 w-full bg-[#F5F8FA] rounded-tl-2xl rounded-bl-2xl">
                  <span>
                    <Image src={mailIcon} alt="icon" />
                  </span>
                  <input
                    type="text"
                    className="border-0 text-dark placeholder:text-dark placeholder:font-medium focus:outline-0"
                    placeholder="Add your email address"
                  />
                </div>
                <div className="bg-gradient-to-r w-full from-[#FF416C] rounded-tr-2xl rounded-br-2xl to-[#FF4B2B] text-white px-5 py-4 flex justify-center items-center">
                  Get Started for free
                </div>
              </div>
            </div>
          </div>

          {/* Other half */}
          <div className="w-[40%] bg-light-ash flex justify-end items-end">
            <div>
              <Image src={dashImg} className="w-[100%]" alt="img" />
            </div>
          </div>
        </div>
        <div className="min-[1400px]:p-28 p-10">
          <Image src={headerShow} alt="show brand" />
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className="flex">
        <div>
          <Image src={dash1} alt="dash" />
        </div>
        <div>
          <h3>Meet Our Products</h3>
          <p className="w-1/2">
            Our Products work Togather seamlessly to form talent science. start
            with one or more.{" "}
          </p>
          <div>
            <div className="flex">
              <span>
                <Image src={goal_manage} alt="goal management" />
              </span>
              <div>
                <div className="flex flex-col gap-4 justify-center items-center bg-orange/5 text-[#E95829]">
                  Align
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
