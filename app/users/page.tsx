import React from "react";
import UsersTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users:</h1>
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
