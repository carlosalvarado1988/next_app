"use client";
import React, { useState, useCallback } from "react";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <SimpleMDE value={value} onChange={onChange} />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
