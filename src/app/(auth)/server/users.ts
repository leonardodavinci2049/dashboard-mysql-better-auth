"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    const currentUser ={}

    if (!currentUser) {
        redirect("/login");
    }

    return {
        ...session,
        currentUser
    }
}

export const signIn = async () => {
    try {
        await auth.api.signInEmail({
            body: {
                email: "test@teste.com",
                password: "password123",
            }
        })

        return {
            success: true,
            message: "Signed in successfully."
        }
    } catch (error) {
        const e = error as Error

        return {
            success: false,
            message: e.message || "An unknown error occurred."
        }
    }
}

export const signUp = async () => {
    try {
        await auth.api.signUpEmail({
            body: {
                email: "test@teste.com",
                password: "password123",
                name: "Test User"
            }
        })

        return {
            success: true,
            message: "Signed up successfully."
        }
    } catch (error) {
        const e = error as Error

        return {
            success: false,
            message: e.message || "An unknown error occurred."
        }
    }
}

export const getUsers = async () => {
    try {

        return null;
    } catch (error) {
        console.error(error);
        return [];
    }
}