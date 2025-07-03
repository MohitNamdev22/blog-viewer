export default function PostInformation({post, onClose}) {
    return (
        <div>
            <div>
                <h2>{post?.title}</h2>
                <p>{post?.content}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}