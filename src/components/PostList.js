export default function PostList({ posts, onPostSelect}) {
    return(
        <div>
            {posts.map((post)=> (
                <div
                key={post.id}
                    className="bg-blue-50 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer my-4 p-5 border border-blue-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"

                onClick={() => onPostSelect(post)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && onPostSelect(post)}
                >
                    <h2 className="text-lg font-semibold text-gray-900">{post.title}</h2>

                </div>
            ))}
        </div>
    )
}