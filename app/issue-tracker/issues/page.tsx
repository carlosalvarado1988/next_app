"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button } from "@radix-ui/themes";

const IssuesPage = () => {
  return (
    <Button>
      <Link href="/issue-tracker/issues/new">New Issue</Link>
    </Button>
  );
};

export default IssuesPage;
