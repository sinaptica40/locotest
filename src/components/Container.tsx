import { FunctionComponent } from "react";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1158px] bg-gray-100 flex flex-col items-start justify-start pt-px px-[17px] pb-4 box-border gap-[4.5px] max-w-full text-left text-smi text-dimgray-300 font-manrope ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-[7px]">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="w-[31px] h-[30px] relative shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-mini bg-orange border-cornsilk border-[1px] border-solid box-border">
            <img
              className="absolute top-[5px] left-[7px] rounded w-4 h-[17px] object-cover"
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
          </div>
        </div>
        <div className="relative leading-[22px] inline-block min-w-[128px]">
          Area inserimento dati
        </div>
      </div>
      <div className="self-stretch h-[39px] rounded-sm bg-goldenrod border-whitesmoke-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[8.5px] px-3 pb-[7.5px] text-gray-100">
        <div className="relative leading-[22px]">
          DATI DIMENSIONALI GENERALI
        </div>
        <img
          className="w-[11px] h-[11px] relative rounded object-cover z-[1] mt-[-18.5px]"
          loading="lazy"
          alt=""
          src="/image-15@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px] box-border max-w-full text-mid text-steelblue">
        <div className="flex-1 shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-whitesmoke-200 border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] pb-[23px] pl-[18px] pr-[17px] gap-2 max-w-full">
          <div className="w-[723px] flex flex-col items-start justify-start gap-px max-w-full">
            <b className="relative leading-[26px]">Descrizione edificio.</b>
            <div className="self-stretch h-12 relative">
              <div className="absolute top-[4px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-sm bg-whitesmoke-200 border-whitesmoke-200 border-[1px] border-solid box-border w-[723px] h-11 flex flex-row items-start justify-end pt-0 px-[5px] pb-[5px]">
                <div className="h-10 w-72 rounded-sm bg-gray-100 border-gainsboro-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-3 pb-2">
                  <input
                    className="w-2 [border:none] [outline:none] font-manrope text-smi bg-[transparent] h-[22px] relative leading-[22px] text-dimgray-400 text-left inline-block p-0"
                    placeholder="3"
                    type="text"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-100 border-gainsboro-100 border-[1px] border-solid box-border w-[432px] h-[45px] flex flex-row items-start justify-start pt-[11.5px] px-5 pb-[10.5px] z-[1]">
                <input
                  className="w-[83px] [border:none] [outline:none] font-manrope text-smi bg-[transparent] h-[22px] relative leading-[22px] text-dimgray-100 text-left inline-block p-0"
                  placeholder="Numero piani."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-0 box-border max-w-full text-sm text-white">
            <div className="flex-1 rounded bg-gray-400 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px] text-dimgray-200 font-lexend">
                <div className="w-[69px] bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-[27px] pl-4 pr-[15px]">
                  <div className="w-9 relative leading-[22px] font-semibold inline-block shrink-0">
                    Piano
                  </div>
                </div>
                <div className="flex-1 bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-4 pl-4 pr-[15px] min-w-[218px] whitespace-nowrap max-w-full">
                  <div className="flex-1 relative leading-[22px] font-semibold">
                    h (m)
                  </div>
                </div>
                <div className="flex-1 bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-4 pl-4 pr-[15px] min-w-[218px] max-w-full">
                  <div className="flex-1 relative leading-[22px] font-semibold">
                    S(mq)
                  </div>
                </div>
                <div className="flex-1 bg-whitesmoke-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-4 pl-4 pr-[15px] min-w-[218px] max-w-full">
                  <div className="flex-1 relative leading-[22px] font-semibold">
                    Sp(mq)
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px]">
                <div className="w-[69px] bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[18px] pl-4 pr-[15px] text-xs text-slategray">
                  <div className="w-9 relative leading-[20px] inline-block shrink-0">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px]">
                <div className="w-[69px] bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[18px] pl-4 pr-[15px] text-xs text-slategray">
                  <div className="w-9 relative leading-[20px] inline-block shrink-0">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full z-[1]">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px]">
                <div className="w-[69px] bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[18px] pl-4 pr-[15px] z-[1] text-xs text-slategray">
                  <div className="w-9 relative leading-[20px] inline-block shrink-0">
                    3
                  </div>
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full z-[2]">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full z-[3]">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
                <div className="flex-1 bg-gray-100 border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[5px] px-4 gap-0.5 min-w-[218px] max-w-full z-[4]">
                  <div className="self-stretch relative leading-[22px]" />
                  <div className="self-stretch relative leading-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
