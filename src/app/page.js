import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
export default function Home() {
    

    return <main>
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <Main />
            <Footer />
        </div>
    </main>;
}
