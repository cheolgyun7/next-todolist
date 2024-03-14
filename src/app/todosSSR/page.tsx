import { Todos } from "@/types/type";
import Link from "next/link";
import React from "react";

const todosSSR = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    cache: "no-cache",
  });
  const data: Todos[] = await response.json();
  return (
    <div className="flex flex-col items-center justify-center h-screen gradient">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">할 일 목록</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((result) => (
          <div
            key={result.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
          >
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {result.title}
              </h2>
              <p className="text-gray-600">{result.contents}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className="text-blue-500 hover:underline mt-8" href="/report">
        할일 정보 통계 보러가기
      </Link>
    </div>
  );
};

export default todosSSR;
