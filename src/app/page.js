import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
export default function Home() {
    return <main>
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="flex-1 bg-blue-200"></div>
            <Footer />
        </div>
    </main>;
}
