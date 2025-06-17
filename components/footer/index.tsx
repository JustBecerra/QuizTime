import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex items-center flex-col md:flex-row my-4 gap-4">
      <div className="flex gap-2 items-center">
        <p className="text-gray-50 text-center">
          Data provided by{" "}
        </p>
        <Link href="https://the-trivia-api.com" target="_blank">
          <span className="text-pink-500 text-lg text-center underline font-bold">
            The Trivia API
          </span>
        </Link>
      </div>
    </div>
  );
};
