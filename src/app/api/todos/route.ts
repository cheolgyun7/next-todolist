export async function GET(request: Request) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("todo is not found", {
      status: 404,
    });
  }

  return Response.json({ todos });
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();

  //사용자 요청에 의한 데이터베이스 처리
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, contents, isDone: false }),
  });
  //사용자 요청에 대한 응답 처리
  const todo = await response.json();
  return Response.json({ todo });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const todo = await response.json();
  return Response.json({ todo });
}

// export async function PATCH(request: Request) {
//   console.log("patch /api/todos/test");
//   const { id, isDone } = await request.json();
//   console.log(id, isDone);
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}todos/${id}`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ isDone: !isDone }),
//     }
//   );
//   const todo = await response.json();
//   return Response.json({ todo });
// }
