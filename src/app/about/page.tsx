import React from "react";
import { CompanyInfo } from "@/types/type";
import Image from "next/image";

const about = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/companyInfo"
  );
  console.log(response);
  const data: CompanyInfo = await response.json();
  console.log(data);
  return (
    <div className="gradient min-h-screen">
      {data.name}, {data.description}
      <Image width={500} height={500} src={data.image} alt="pic" />
    </div>
  );
};

export default about;
