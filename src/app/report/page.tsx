import React from "react";
import { Todos } from "@/types/type";

const report = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    next: {
      revalidate: 10,
    },
  });
  const data: Todos[] = await response.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-200">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          할 일 보고서
        </h1>
        <div className="mb-4">
          <span className="text-xl font-bold">{data.length}</span>
          <span className="ml-2">개의 할 일이 등록되어 있습니다.</span>
        </div>
        <div className="mb-4">
          <span className="text-xl font-bold">
            {data.filter((item) => item.isDone === true).length}
          </span>
          <span className="ml-2">개의 완료된 할 일이 있습니다.</span>
        </div>
        <div>
          <span className="text-xl font-bold">
            {data.filter((item) => item.isDone === false).length}
          </span>
          <span className="ml-2">개의 진행 중인 할 일이 있습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default report;
