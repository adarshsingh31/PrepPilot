import { useEffect, useRef } from "react";
import { trackTime } from "../services/timeService";

/**
 * useTimeTracker - tracks active time spent on a page/module
 * Automatically accounts for browser tab visibility (pauses when tab is hidden)
 * Sends accumulated seconds to backend when the component unmounts or the tab closes.
 *
 * @param {string} moduleName - The module identifier. One of:
 *   "mockInterview", "codingPractice", "resumeAnalyzer", "studyPlan", "questionBank"
 */
export function useTimeTracker(moduleName) {
  const startTimeRef = useRef(null);
  const accumulatedRef = useRef(0);

  useEffect(() => {
    // Start tracking when component mounts
    startTimeRef.current = Date.now();

    const pause = () => {
      if (startTimeRef.current !== null) {
        accumulatedRef.current += (Date.now() - startTimeRef.current) / 1000;
        startTimeRef.current = null;
      }
    };

    const resume = () => {
      if (startTimeRef.current === null) {
        startTimeRef.current = Date.now();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    };

    // Flush accumulated time to backend
    const flush = () => {
      pause();
      const seconds = Math.round(accumulatedRef.current);
      if (seconds >= 5) {
        trackTime(moduleName, seconds);
      }
      accumulatedRef.current = 0;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", flush);

    return () => {
      // Flush on component unmount (user navigates away)
      flush();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", flush);
    };
  }, [moduleName]);
}
