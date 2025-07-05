import {useState} from 'react';
import PostList from '@/components/PostList';
import PostInformation from '@/components/PostInformation';

export default function Posts({posts}) {
    const [selectedPost, setSelectedPost] = useState(null);

    if(!posts){
        return <div>Loading...</div>;
    }

    return (
       <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center py-10">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-extrabold text-3xl text-center mb-8 text-gray-900 tracking-tight">Blog Posts</h1>
            <PostList posts={posts} onPostSelect={setSelectedPost}/>
            {selectedPost && (
                <PostInformation
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    </div>
    );
}

export async function getServerSideProps(){
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