export const BlogPreview = ({ itemBody, itemTitle }) => {
    return (
        <div  className={`width ${itemTitle && itemBody ? "blog-item" : "none"}`}>
            <h2>{itemTitle}</h2>
            <p>{itemBody}</p>
        </div>
    )
}
