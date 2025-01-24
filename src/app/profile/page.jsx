"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
    const { isAuthenticated, login } = useKindeAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            login();
        }
    }, [isAuthenticated, login]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-bold text-center mt-4">
                Welcome to your profile!
            </h1>
        </div>
    );
}
