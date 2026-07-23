import UploadBox from "./UploadBox";
import ProgressBar from "./ProgressBar";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const AssistantPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[calc(100vh-140px)] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            AI Complaint Intake Assistant
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Powered by AIVOA Copilot
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
          BETA
        </span>

      </div>

      {/* Upload */}
      <UploadBox />

      {/* OR */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200"></div>
        <span className="text-xs text-slate-500">OR</span>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>

      {/* Paste Button */}
      <button
        className="
          w-full
          border
          border-slate-300
          rounded-lg
          py-3
          text-sm
          font-medium
          hover:bg-slate-50
          transition
        "
      >
        📋 Paste Complaint Text / Email
      </button>

      <div className="mt-2 text-xs text-green-600 bg-green-50 rounded-md p-2">
        Supported formats: PDF, DOCX, TXT, EML
      </div>

      {/* Progress */}
      <div className="mt-6">
        <ProgressBar />
      </div>

      {/* Chat */}
      <div className="flex-1 mt-6 overflow-auto">
        <ChatWindow />
      </div>

      {/* Input */}
      <div className="mt-4">
        <ChatInput />
      </div>

    </div>
  );
};

export default AssistantPanel;