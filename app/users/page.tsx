import React from "react";
import UsersTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users:</h1>
      <Link href={"/users/new"} className="btn mb-5">
        New User
      </Link>
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
