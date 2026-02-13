import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:5001"); // your socket server

export default function CommunityChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    const user = {
        id: "123",
        username: "Samuel", // replace with auth user later
    };

    useEffect(() => {
        socket.emit("join-room", "community");

        socket.on("receive-message", msg => {
            setMessages(m => [...m, msg]);
        });

        return () => socket.off("receive-message");
    }, []);

    const sendMessage = () => {
        if (!text.trim()) return;

        const message = {
            roomId: "community",
            userId: user.id,
            username: user.username,
            text,
            createdAt: new Date(),
        };

        socket.emit("send-message", message);
        setText("");
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-10 right-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-4 shadow-xl z-50"
            >
                💬
            </button>

            {/* Chat Panel */}
            {open && (
                <div className="fixed bottom-36 right-4 w-80 h-96 bg-slate-900 border border-white/10 rounded-xl shadow-2xl flex flex-col z-50">
                    <div className="p-3 border-b border-white/10 font-semibold">
                        🌍 Community Chat
                    </div>

                    <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
                        {messages.map((m, i) => (
                            <div key={i}>
                                <span className="text-indigo-400 font-medium">
                                    {m.username}
                                </span>
                                <div className="bg-white/10 rounded-lg p-2 mt-1">
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-2 border-t border-white/10 flex gap-2">
                        <input
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            placeholder="Message the community..."
                            className="flex-1 bg-slate-800 rounded-lg px-3 py-2 outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-indigo-500 px-3 rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
