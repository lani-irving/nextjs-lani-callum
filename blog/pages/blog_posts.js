import Blog_card from "../components/blog_card";

export default function blog_posts({blogpost}) {
    return (
    <>
    <Blog_card blogpost={blogpost}/>
    </>
    )
  }

  // might be div, but may be affected by global styling