const ComplaintField = ({
  label,
  value = "",
  placeholder = "Awaiting AI extraction...",
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        readOnly
        placeholder={placeholder}
        className="
          w-full
          h-11
          rounded-lg
          border
          border-slate-300
          bg-white
          px-3
          text-sm
          text-slate-700
          placeholder:text-slate-400
          focus:outline-none
        "
      />
    </div>
  );
};

export default ComplaintField;