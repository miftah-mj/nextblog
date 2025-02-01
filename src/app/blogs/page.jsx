"use client";

import LoadingSpinner from "@components/LoadingSpinner";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-12">
            <h1 className="text-4xl font-bold text-center">All Blogs</h1>
            <p className="text-center mt-4">
                A collection of all the blogs available on our platform. Feel
                free to read them and leave a comment.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-md rounded-sm flex flex-col p-4"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {post.title}
                        </h2>
                        <p className="text-gray-700 mb-4 flex-grow">
                            {post.body.substring(0, 100)}...
                        </p>
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-500 border border-blue-500 w-max p-3 hover:underline"
                        >
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
