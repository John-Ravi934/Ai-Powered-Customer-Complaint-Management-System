import { UploadCloud } from "lucide-react";

const UploadBox = () => {
  return (
    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-500 transition cursor-pointer">

      <UploadCloud
        size={36}
        className="mx-auto text-slate-400 mb-3"
      />

      <p className="font-medium text-slate-700">
        Drag & Drop Complaint Document
      </p>

      <p className="text-sm text-slate-500 mt-1">
        or click to browse
      </p>

    </div>
  );
};

export default UploadBox;