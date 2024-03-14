import React from "react";

const DetailPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>DetailPage {params.id}</div>;
};

export default DetailPage;
