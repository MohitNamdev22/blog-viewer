import {useState} from 'react';
import PostList from '@/components/PostList';
import PostInformation from '@/components/PostInformation';

export default function Posts({posts}) {
    const [selectedPost, setSelectedPost] = useState(null);

    if(!posts){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            <PostList posts={posts} onPostSelect={setSelectedPost}/>
            {selectedPost && (
                <PostInformation
                post={selectedPost}
                onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
}

export async function getStaticProps(){
    try{
        const res = await fetch('http://localhost:3000/api/posts');
        const posts = await res.json();
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.error("Error to fetch blog posts:", error);
        return {
            props: {
                posts: null,
            }
        };
    }
}