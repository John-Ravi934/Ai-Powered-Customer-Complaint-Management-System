import { useAppSelector } from "../../hooks/reduxHooks";

const ProgressBar = () => {
  const progress = useAppSelector(
    (state) => state.chat.progress
  );

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          Extraction Progress
        </span>

        <span className="text-sm">
          {progress}%
        </span>
      </div>

      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="
            h-full
            bg-blue-600
            rounded-full
            transition-all
            duration-500
            ease-out
          "
        />
      </div>
    </div>
  );
};

export default ProgressBar;