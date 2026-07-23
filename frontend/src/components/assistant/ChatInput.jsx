import { Send } from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/reduxHooks";

import {
  setInput,
  addMessage,
  setProgress,
  setLoading,
  setTyping,
  clearInput,
} from "../../redux/slices/chatSlice";

import { parseComplaint } from "../../utils/parseComplaint";
import { updateComplaint } from "../../redux/slices/complaintSlice";

const ChatInput = () => {
  const dispatch = useAppDispatch();

  const input = useAppSelector(
    (state) => state.chat.input
  );

  const loading = useAppSelector(
  (state) => state.chat.loading
);

 const handleSend = () => {
  if (!input.trim()) return;

    dispatch(setLoading(true));

    dispatch(setTyping(true));

  // Save user message
  dispatch(
    addMessage({
      id: Date.now(),
      sender: "user",
      text: input,
    })
  );

// Start progress
dispatch(setProgress(0));

// 20%
setTimeout(() => {
  dispatch(setProgress(20));
}, 300);

// 45%
setTimeout(() => {
  dispatch(setProgress(45));
}, 700);

// 70%
setTimeout(() => {
  dispatch(setProgress(70));
}, 1100);


// Complete
setTimeout(() => {
  dispatch(setProgress(100));

  const parsedComplaint = parseComplaint(input);

  dispatch(updateComplaint(parsedComplaint));

  dispatch(
    addMessage({
      id: Date.now() + 1,
      sender: "assistant",
      text:
        "Complaint parsed successfully. I've extracted the product details and populated the complaint form.",
    })
  );

  dispatch(clearInput());

  // Reset after a short delay
  setTimeout(() => {
    dispatch(setProgress(0));
  }, 1500);

  dispatch(setLoading(false));
  dispatch(setTyping(false));

}, 1600);
};

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        disabled={loading}
        placeholder="Ask me anything about this complaint..."
        value={input}
        onChange={(e) =>
          dispatch(setInput(e.target.value))
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
          disabled={loading}
        className={`
  rounded-lg
  p-3
  text-white
  transition
  ${
    loading
      ? "bg-slate-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }
`}
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;