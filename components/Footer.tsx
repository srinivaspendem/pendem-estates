import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary relative">
        <div className="absolute w-full h-full text-white py-10">
          <div className="container mx-auto px-5 h-full flex  justify-between">
            <div className="md:text-3xl">
              Your investment is always with you
            </div>
            <div className="md:text-2xl mt-auto mb-40">
              <div className="">Contact</div>
              <div className="">9440279954</div>{" "}
              <div className="">9440015566</div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/footer.svg" className="w-full" alt="" />
        </div>
      </div>
      <div className="w-full bg-primary relative text-center text-white py-2 text-sm">
        @ A part of Pendem
      </div>
    </>
  );
};
export default Footer;
