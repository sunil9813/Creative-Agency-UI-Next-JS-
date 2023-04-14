import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <Card data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
