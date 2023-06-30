"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
const Createprompt = () => {
  const [submit, setsubmit] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });
  const createprompt = async (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      setpost={setpost}
      submit={submit}
      handlesubmit={createprompt}
    />
  );
};

export default Createprompt;
