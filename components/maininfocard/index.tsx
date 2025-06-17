import { InteractiveElements } from "./InteractiveElements";

export const Maininfocard = () => {
  return (
    <div className="bg-gray-50 w-[90%] md:w-[30%] h-[65vh] rounded-[2.5rem]">
      <div className="flex flex-col justify-center h-auto flex-1 items-center gap-12">
        <h1 className="text-3xl font-bold text-blue-600 italic">
          Test your knowledge
        </h1>
        <InteractiveElements />
      </div>
    </div>
  );
};
