import Link from "next/link";

const Location = () => {
  return (
    <>
      <section className="bg-[#F7FAFC] py-20">
        <div className="container mx-auto">
          {/*----- section header -----*/}
          <div className="text-center pb-6 md:pb-10 lg:pb-10">
            <h5 className="text-[#627FF4] font-bold">DESTINATION</h5>
            <div className="divider w-[30px] mx-auto my-1 bg-[#1751E4] h-1"></div>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
              go exotic places
            </h1>
          </div>
          {/*----- section header -----*/}
          {/*----- Location Container -----*/}
          <div className="block md:flex lg:flex px-10 lg:px-0">
            <div className="w-full md:w-[131%] lg:max-w-[33.3%] group relative">
              <img src="https://i.ibb.co/ByXW3K0/location10.png" />
              <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <Link href="/" className="cursor-pointer">
                  <h1 class="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                    North West Region
                  </h1>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="group relative">
                  <img src="https://i.ibb.co/JnXHGqk/Ahasan-manjill.png" />
                  <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <Link href="/" className="cursor-pointer">
                      <h1 class="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        Central Region
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="group relative">
                  <img src="https://i.ibb.co/yq1cb38/cox-bazer.png" />
                  <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <Link href="/" className="cursor-pointer">
                      <h1 class="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South East Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="group relative">
                  <img src="https://i.ibb.co/DQz7210/jaflong.png" />
                  <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <Link href="/" className="cursor-pointer">
                      <h1 class="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        North East Region
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="group relative">
                  <img src="https://i.ibb.co/zxmNYFc/Sundarban.png" />
                  <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <Link href="/" className="cursor-pointer">
                      <h1 class="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                        South West Region
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*----- Location Container -----*/}
        </div>
      </section>
    </>
  );
};

export default Location;
