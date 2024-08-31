import { FunctionComponent } from "react";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[685px] max-w-full h-[492px] overflow-hidden text-left text-[38px] text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[685px] h-[492px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[342.5px] h-[492px] object-cover"
        alt=""
        src="/01@2x.png"
      />
      <div className="absolute top-[145px] left-[375px] w-[278px] h-[202px]">
        <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[115%] inline-block w-[276px]">
          Build your own team library
        </b>
        <div className="absolute top-[106px] left-[0px] text-sm tracking-[-0.01em] leading-[24px] text-gray-300 inline-block w-[278px]">
          Don’t reinvent the wheel with every design. Team libraries let you
          share styles and components across files, with everyone on your team.
        </div>
      </div>
    </div>
  );
};

export default Frame;
