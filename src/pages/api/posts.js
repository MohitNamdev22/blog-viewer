export default function handler(req, res){
    const blogs = [
        {
            id:1,
            title: "Building a App with nextjs",
            content: "we going to learn how to build app using nextjs"
        },
        {
            id:2,
            title: "Designing the App",
            content: "Now here we going to design our app using Tailwind CSS"
        },
        {
            id:3,
            title: "Deploying the App",
            content: "Now here we going to deploy our app using Vercel"
        },
        
    ];

    res.status(200).json(blogs);
}