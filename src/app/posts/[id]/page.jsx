"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                const data = await res.json();
                setPost(data);
            };

            fetchPost();
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.body}</p>
        </div>
    );
}
