const StrengthIndicator = ({ length }: { length: number }) => {
  const Default = (
    <div className="flex gap-1 h-full">
      <span className="h-5 border border-base-content p-0.5" />
      <span className="h-5 border border-base-content p-0.5" />
      <span className="h-5 border border-base-content p-0.5" />
      <span className="h-5 border border-base-content p-0.5" />
    </div>
  );

  const Strong = (
    <div className="flex gap-1 h-full">
      <span className="h-5 border border-base-content p-0.5 bg-green-500" />
      <span className="h-5 border border-base-content p-0.5 bg-green-500" />
      <span className="h-5 border border-base-content p-0.5 bg-green-500" />
      <span className="h-5 border border-base-content p-0.5 bg-green-500" />
    </div>
  );
  const Medium = (
    <div className="flex gap-1 h-full">
      <span className="h-5 border border-base-content p-0.5 bg-yellow-500" />
      <span className="h-5 border border-base-content p-0.5 bg-yellow-500" />
      <span className="h-5 border border-base-content p-0.5 bg-yellow-500" />
      <span className="h-5 border border-base-content p-0.5 " />
    </div>
  );
  const Weak = (
    <div className="flex gap-1 h-full">
      <span className="h-5 border border-base-content p-0.5 bg-orange-500" />
      <span className="h-5 border border-base-content p-0.5 bg-orange-500" />
      <span className="h-5 border border-base-content p-0.5" />
      <span className="h-5 border border-base-content p-0.5 " />
    </div>
  );
  const TooWeak = (
    <div className="flex gap-1 h-full">
      <span className="h-5 border border-base-content p-0.5 bg-red-500" />
      <span className="h-5 border border-base-content p-0.5 " />
      <span className="h-5 border border-base-content p-0.5" />
      <span className="h-5 border border-base-content p-0.5 " />
    </div>
  );

  const indicator = {
    message: "",
    jsx: Default,
  };
  if (length > 10) {
    indicator.message = "STRONG";
    indicator.jsx = Strong;
  } else if (length > 6) {
    indicator.message = "MEDIUM";
    indicator.jsx = Medium;
  } else if (length > 4) {
    indicator.message = "WEAK";
    indicator.jsx = Weak;
  } else if (length > 0) {
    indicator.message = "TOO WEAK!";
    indicator.jsx = TooWeak;
  }
  return (
    <div className="flex justify-between items-center bg-base-100 p-5">
      <div>
        <span>STRENGTH</span>
      </div>

      <div className="flex gap-3">
        <span className="text-base-content"> {indicator.message} </span>
        <div> {indicator.jsx} </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
