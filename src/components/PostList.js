export default function PostList({ posts, onPostSelect}) {
    return(
        <div>
            {posts.map((post)=> (
                <div
                key={post.id}
                className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => onPostSelect(post)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && onPostSelect(post)}
                >
                    <h2>{post.title}</h2>

                </div>
            ))}
        </div>
    )
}