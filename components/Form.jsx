import React from "react";
import Link from "next/link";
function Form({ type, post, setpost, submit, handlesubmit }) {
  return (
    <section  className="w-full max-w-full flexe-start flex-start">
<h1 className="head_text text-left"> <span className="blue_gradient">{type} Post</span> </h1>
<p className="desc text-left max-w-md">
  {type} and share amazing prompts with the word, and let you imagination run the wild with any ai Ai-powerd platform.
</p>
    </section>
  )
}

export default Form;
