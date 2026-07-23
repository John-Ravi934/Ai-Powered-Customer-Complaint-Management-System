import Message from "./Message";
import { useAppSelector } from "../../hooks/reduxHooks";

const ChatWindow = () => {

    const messages = useAppSelector(
        state => state.chat.messages
    );

    const typing = useAppSelector(
        state => state.chat.typing
    );

    return (
        <div className="space-y-4">
            {messages.map(message => (
                <Message
                    key={message.id}
                    sender={message.sender}
                    text={message.text}
                />
            ))}

            {typing && (
                <Message
                    sender="assistant"
                    typing
                />
            )}
        </div>
    );
};

export default ChatWindow;