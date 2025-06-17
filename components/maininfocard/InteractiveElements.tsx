"use client";
import { useContext, useState } from "react";
import QuizContext from "../../context/QuizProvider";
import { useDisclosure } from "@mantine/hooks";
import { SubmitModal } from "../submitmodal";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export const InteractiveElements = () => {
  const { quizData } = useContext(QuizContext);
  const [opened, { open, close }] = useDisclosure(false);
  const [accordionOpen, setAccordionOpen] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRedirect = () => {
    if (quizData.length > 0) {
      setLoading(true);
      router.push("quiz");
    } else {
      toast.loading("Loading fun questions.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => router.push("quiz"), 3100);
    }
  };

  const toggleAccordion = (value: string) => {
    setAccordionOpen(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-center h-auto flex-1 items-center gap-12">
        <div className="w-3/5">
          {/* Questions Accordion */}
          <div className="border rounded-lg mb-4">
            <button
              onClick={() => toggleAccordion("Questions")}
              className="w-full px-4 py-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.35-.43.58-.82.58-.5 0-.9-.5-.78-1 .5-1.5 1.78-2.67 3.39-2.67 1.94 0 3.5 1.56 3.5 3.5 0 1.02-.43 1.93-1.12 2.57z" />
                </svg>
                <span>Questions</span>
              </div>
              <svg className={`w-5 h-5 transform transition-transform ${accordionOpen.includes("Questions") ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {accordionOpen.includes("Questions") && (
              <div className="px-4 py-2 bg-white">
                <p className="text-sm">Contains 10 questions provided by the trivia API and other users.</p>
              </div>
            )}
          </div>

          {/* Time Accordion */}
          <div className="border rounded-lg mb-4">
            <button
              onClick={() => toggleAccordion("Time")}
              className="w-full px-4 py-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span>Time</span>
              </div>
              <svg className={`w-5 h-5 transform transition-transform ${accordionOpen.includes("Time") ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {accordionOpen.includes("Time") && (
              <div className="px-4 py-2 bg-white">
                <p className="text-sm">You&apos;ve got 30 seconds to answer per question.</p>
              </div>
            )}
          </div>

          {/* Difficulty Accordion */}
          <div className="border rounded-lg">
            <button
              onClick={() => toggleAccordion("Difficulty")}
              className="w-full px-4 py-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                </svg>
                <span>Difficulty</span>
              </div>
              <svg className={`w-5 h-5 transform transition-transform ${accordionOpen.includes("Difficulty") ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {accordionOpen.includes("Difficulty") && (
              <div className="px-4 py-2 bg-white">
                <p className="text-sm">Questions vary on difficulty and theme.</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRedirect}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Start Quiz
          </button>
          <button
            onClick={open}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
            </svg>
            Submit Question
          </button>
        </div>
        <SubmitModal opened={opened} close={close} />
      </div>
    </>
  );
};