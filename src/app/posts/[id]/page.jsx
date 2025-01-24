"use client";

import LoadingSpinner from "../../../components/LoadingSpinner";
import Link from "next/link";
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
        return <LoadingSpinner />;
    }

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-screen-lg mx-auto px-4 lg:px-0 text-center">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700 mb-6">{post.body}</p>
                <Link
                    href="/"
                    className="text-blue-500 border border-blue-500 p-3 hover:underline"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
