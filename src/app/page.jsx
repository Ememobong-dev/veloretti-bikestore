import Image from "next/image";
import dashImg from "@/public/images/header_performaceImg.png";
import headerShow from "@/public/images/header-showBrand.png";
import dash1 from "@/public/images/dash1.png";
import goal_manage from "../../public/images/goal-manage.png";
import performance_rev from "../../public/images/performance-rev.png";
import remoter_tool from "../../public/images/remoter-tool.png";
import bannerImg from "../../public/images/banner.png";
import mailIcon from "@/public/icons/mail.svg";
import align from "@/public/icons/align.svg";
import remote from "@/public/icons/remote.svg";
import icon1 from "@/public/icons/icon1.svg";
import icon2 from "@/public/icons/icon2.svg";
import icon3 from "@/public/icons/icon3.svg";
import icon4 from "@/public/icons/icon4.svg";
import dash2 from "@/public/images/dash2.png";

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
      <div className="flex gap-10">
        <div>
          <Image src={dash1} alt="dash" />
        </div>
        <div className="min-[1400px]:pr-28 pr-10">
          <h3 className="text-3xl font-bold text-bluish-purple">
            Meet Our Products
          </h3>
          <p className="w-[30%] text-bluish-grey mt-8">
            Our Products work Togather seamlessly to form talent science. start
            with one or more.{" "}
          </p>
          <div className="flex flex-col gap-28 mt-20">
            <div className="flex items-stretch ">
              <div>
                <Image
                  src={goal_manage}
                  className="w-[90%] h-auto"
                  alt="goal management"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex w-32 p-3 rounded-lg gap-4 justify-center items-center bg-orange/15 text-[#E95829]">
                  <span>
                    <Image src={align} alt="icon" />
                  </span>
                  Align
                </div>
                <h2 className="text-2xl text-bluish-purple ">
                  Goal Management
                </h2>
                <p className="text-bluish-grey">
                  Our Products work Together seamlessly to form talent science.
                  start with one or more.
                </p>
                <div className="flex gap-14 text-bluish-purple items-center">
                  <p>Daily Track</p>
                  <p>Road Map</p>
                </div>
                <button className="flex mt-10 font-semibold justify-center items-center py-3 rounded-md px-3 w-40 bg-yellow text-[#323F73]">
                  Learn more
                </button>
              </div>
            </div>

            {/* Second */}
            <div className="flex items-stretch ">
              <div className="flex flex-col gap-5">
                <div className="flex w-32 p-3 rounded-lg gap-4 justify-center items-center bg-orange/15 text-[#E95829]">
                  <span>
                    <Image src={align} alt="icon" />
                  </span>
                  Align
                </div>
                <h2 className="text-2xl text-bluish-purple ">
                  Goal Management
                </h2>
                <p className="text-bluish-grey">
                  Our Products work Together seamlessly to form talent science.
                  start with one or more.
                </p>
                <div className="flex gap-14 text-bluish-purple items-center">
                  <p>Daily Track</p>
                  <p>Road Map</p>
                </div>
                <button className="flex mt-10 font-semibold justify-center items-center py-3 rounded-md px-3 w-40 bg-yellow text-[#323F73]">
                  Learn more
                </button>
              </div>
              <div>
                <Image
                  src={remoter_tool}
                  className="w-[90%] h-auto"
                  alt="goal management"
                />
              </div>
            </div>

            {/* third */}
            <div className="flex items-stretch ">
              <div>
                <Image
                  src={performance_rev}
                  className="w-[90%] h-auto"
                  alt="goal management"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex w-32 p-3 rounded-lg gap-4 justify-center items-center bg-orange/15 text-[#E95829]">
                  <span>
                    <Image src={align} alt="icon" />
                  </span>
                  Align
                </div>
                <h2 className="text-2xl text-bluish-purple ">
                  Goal Management
                </h2>
                <p className="text-bluish-grey">
                  Our Products work Together seamlessly to form talent science.
                  start with one or more.
                </p>
                <div className="flex gap-14 text-bluish-purple items-center">
                  <p>Daily Track</p>
                  <p>Road Map</p>
                </div>
                <button className="flex mt-10 font-semibold justify-center items-center py-3 rounded-md px-3 w-40 bg-yellow text-[#323F73]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}

      <div className="min-[1400px]:m-28 m-10 p-28 mt-44 flex justify-between banner-count h-[300px] min-[1400px]:h-auto bg-gradient-to-r from-[#EDEFF5] to-[#FAFAFA]">
        <div className="flex flex-col gap-6">
          <h3 className="text-bluish-purple text-3xl font-bold">
            People use our Software and counting.
          </h3>
          <p className="text-bluish-grey w-[70%]">
            Fully Customizable performance management platform that suits your
            culture. not the other way around
          </p>
          <div className="flex gap-3 items-start">
            <div className="bg-white py-5 px-6 text-5xl font-bold rounded-xl text-bluish-purple flex justify-center items-center">
              1
            </div>
            <div className="bg-white py-5 px-6 text-5xl font-bold rounded-xl text-bluish-purple flex justify-center items-center">
              2
            </div>
            <div className="bg-white py-5 px-6 text-5xl font-bold rounded-xl text-bluish-purple flex justify-center items-center">
              1
            </div>
            <div className="bg-white py-5 px-6 text-5xl font-bold rounded-xl text-bluish-purple flex justify-center items-center">
              7
            </div>
          </div>
        </div>
        <div>
          <Image
            src={bannerImg}
            className="w-full h-[250px] min-[1400px]:h-[300px]"
            alt="bannerImg"
          />
        </div>
      </div>

      {/* FOURTH SECTION */}
      <div className="min-[1400px]:pl-28 pl-10">
        <div className="flex">
          <div>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-bluish-purple text-center text-3xl font-bold">
                Frequently Asked Questions
              </h3>
              <p className="text-bluish-grey w-[70%] text-center">
                Fully Customizable performance management platform that suits
                your culture. not the other way around
              </p>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-col gap-7">
                <div>
                  <div className="flex gap-6">
                    <span>
                      <Image src={icon1} alt="" />
                    </span>
                    <p>products</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-6">
                    <span>
                      <Image src={icon2} alt="" />
                    </span>
                    <p>Subscription</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-6">
                    <span>
                      <Image src={icon3} alt="" />
                    </span>
                    <p>Customer</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-6">
                    <span>
                      <Image src={icon4} alt="" />
                    </span>
                    <p>Data Plans</p>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <span>
            <Image src={dash2} alt="dash" />
          </span>
        </div>
      </div>
    </div>
  );
}
