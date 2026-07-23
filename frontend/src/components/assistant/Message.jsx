import { Bot } from "lucide-react";

const Message = ({ sender, text, typing }) => {
    const isUser = sender === "user";

    if (typing) {
    return (
        <div className="flex justify-start">
            <div className="bg-slate-200 rounded-xl px-4 py-3 text-sm">
                🤖 AI is analyzing complaint...
            </div>
        </div>
    );
}

    return (
        <div
            className={`flex ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                }`}
            >

                
                {text}
            </div>
        </div>
    );
};

export default Message;