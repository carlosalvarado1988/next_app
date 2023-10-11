"use client";
import React, { useState } from "react";
// import _ from "lodash"; // turned into a lazy loading with  const _ = (await import("lodash")).default;

// lazy loading implementation of a component with dynamic
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>loading</p>,
  ssr: false,
});

export default function Home() {
  const [show, setShow] = useState(false);
  const initialUsers: { name: string }[] = [
    { name: "c" },
    { name: "a" },
    { name: "b" },
  ];
  const [users, setUsers] = useState(initialUsers);

  return (
    <div>
      <h1 className="font-bold text-3xl">Hello World</h1>
      <>
        <button
          className="btn btn-secondary mb-3"
          onClick={() => setShow(!show)}
        >
          Lazy load Heavy Component
        </button>
        {show && <HeavyComponent />}
      </>
      <>
        <button
          className="btn btn-secondary mb-3"
          onClick={async () => {
            // implementing lazy loading on library

            const _ = (await import("lodash")).default;
            const orderedUsers = _.orderBy(initialUsers, ["name"]);
            setUsers(orderedUsers);
          }}
        >
          Order users with lazy loading lodash
        </button>
        <ul>
          {users.map((u) => (
            <li key={u.name}>{u.name}</li>
          ))}
        </ul>
      </>
    </div>
  );
}
