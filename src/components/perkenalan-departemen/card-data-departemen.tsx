import type { FC, HTMLAttributes } from "react";

export const cardDepartemen: FC<
  HTMLAttributes<HTMLDivElement> & { departemen: any }
> = ({ departemen, ...props }) => {
  return (
    <div {...props}>
      <div className="relative w-[320px] h-[320px] bg-[#EEE] rounded-[15px] shadow-md rounded-2xl p-[20px]">
        <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[280px] h-[150px] bg-[#FDE172] rounded-[15px] shadow-md">
          <img
            src={departemen.gambar}
            alt={departemen.nama}
            className="w-full h-full object-cover rounded-[15px]"
          />
        </div>

        <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 w-[140px] h-[40px] bg-[var(--Primary,#29AC4A)] rounded-[35px] flex items-center justify-center overflow-hidden">
          <span className="text-[15px] text-[#212C4F] font-rubik font-medium whitespace-nowrap">
            {departemen.nama}
          </span>
        </div>

        <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 w-[265px] h-[100px] text-[#212C4F] text-center font-rubik text-[14px] font-normal tracking-tight overflow-hidden p-2">
          {departemen.deskripsi}
        </div>
      </div>
    </div>
  );
};
