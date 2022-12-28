const Blog_card = ({ blogpost }) => {
    return (
        <div className="blog-card">
        <h1 className="blog-title">{blogpost.title}</h1>
        <p className="blog-post">{blogpost.post}</p>
        </div>
    );
}
 
export default Blog_card;