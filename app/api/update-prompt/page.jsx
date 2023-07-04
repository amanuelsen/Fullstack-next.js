"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const Editpropmt = () => {
  const router = useRouter();
const searchparams=useSearchParams()
const propmtid=searchparams.get("id")
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  useEffect(()=>{
const getpropmtdetailt= async ()=>{
    const response= await fetch(`api/prompt/${propmtid}`)
    const data= await response.json()
    setPost({
        prompt:data.propmt,
        tag:data.tag
    })
    if(propmtid) getpropmtdetailt()
}
  }, [prompt])

  const Uppdatepropmt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
if(!propmtid) return alert("Missing propmt id")
    try {
      const response = await fetch(`/api/prompt/${propmtid}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={Uppdatepropmt}
    />
  );
};

export default Editpropmt;