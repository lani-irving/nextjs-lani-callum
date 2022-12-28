export default function about({blogpost}) {
  return (
    <>
    <p>About this blog</p>
    <p>This is the title: {blogpost.title}</p>
    <p>This is the blog: {blogpost.post}</p>
    </>
  )
}