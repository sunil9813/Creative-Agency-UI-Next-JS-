import { blog } from "@/assets/data/dummydata";
import BlogCard from "@/components/BlogCard";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Analysis = () => {
  return (
    <iframe
    width="100%"
    height={800}
    src="https://lookerstudio.google.com/embed/reporting/f8cfeb3b-8bbf-4c72-9cd6-81d259c09a23/page/p_bx09j7tm9c"
    frameBorder={0}
    style={{ border: 0 }}
    allowFullScreen=""
  />
  );
};

export default Analysis;
