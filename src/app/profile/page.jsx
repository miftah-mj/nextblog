"use client";

import { useEffect, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
    const { getUser } = useKindeAuth();
    console.log(getUser);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(profile);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const user = await getUser();
                setProfile(user);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile information:", error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [getUser]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Error loading profile information</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-12">
            <h1 className="text-4xl font-bold text-center mb-4">
                Welcome to your profile, {profile.given_name}!
            </h1>

            <p className="text-gray-700 text-center mb-6">
                Here you can manage your personal information, view your
                activity, and update your settings.
            </p>

            <div className="flex flex-col items-center text-center gap-2">
                <img
                    className="w-16 h-16 rounded-full"
                    src={profile.picture}
                    alt="profile"
                />
                <p>
                    <strong>Email:</strong> {profile.email}
                </p>
                <p>
                    <strong>Name:</strong> {profile.given_name}{" "}
                    {profile.family_name}
                </p>
            </div>
        </div>
    );
}
