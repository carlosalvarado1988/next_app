import React from "react";

interface Props {
  params: { id: number };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>The ID in the params is: {id}</div>;
};

export default UserDetailPage;
