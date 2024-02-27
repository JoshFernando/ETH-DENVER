"use client";

import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { Button } from "@/components/ui/button";

const ChatPage = () => {
    const [messages, setMessages] = useState<
        { sender: string; message: string }[]
    >([]);
    const videosrc =
        "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C111277018776732786620/tlk_fFymDoyQrp2I-ioCGco3o/1708269110146.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1708355513&Signature=jXzczcJ7pZgSS7AM3OTahQ4dqd4%3D";
    const [inputMessage, setInputMessage] = useState("");

    const sendMessage = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "User", message: inputMessage },
        ]);
        setInputMessage("");
    };

    return (
        <div className="relative w-full h-full bg-transparent">
            <div className="flex w-full h-full">
                <div className="flex w-1/2 h-2/3 mx-20 bg-white rounded-3xl border-4 border-black">
                    <VideoPlayer videosrc={videosrc} />
                    <Button>Create a talk</Button>
                </div>
                <div className="flex w-2/5 h-3/4 mx-16 bg-white">
                    <div>
                        <div>
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={
                                        (message.sender === "User"
                                            ? "text-right ml-20"
                                            : "text-left mr-20") +
                                        " w-1/2 bg-blue-300 p-2 rounded-lg m-2"
                                    }
                                >
                                    {message.message}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) =>
                                    setInputMessage(e.target.value)
                                }
                                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChatPage;
