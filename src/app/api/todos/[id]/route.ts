export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: isDone }),
    }
  );
  const todo = await response.json();
  return new Response(JSON.stringify(todo));
}

export async function DELETE(
  request: Request, //외부요청을 받아옴
  { params }: { params: { id: string } } //해당요청의 매개변수중에서 id값을 가져옴
) {
  const id = params.id;
  console.log(id);
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "DELETE",
  });
  console.log("처음");
  return new Response(null, { status: 200 });
}
