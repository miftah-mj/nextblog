"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-center mt-8">
                Welcome to my blog
            </h1>
            <p className="text-center mt-4">
                Here you can find all the latest blog posts
            </p>
            <div className="mt-8">
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="mb-4">
                            <Link
                                href={`/posts/${post.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
