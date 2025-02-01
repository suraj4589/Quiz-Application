import { useState, useEffect } from "react";
import { formatTime, getTimeLeftUntilMidnight} from "./constant/constant";

 
export default function LiveTest() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [midnightTime, setMidnightTime] = useState(getTimeLeftUntilMidnight());

  // Fetch quiz data
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, []);

  // Countdown Timer
  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setIsCompleted(true);
    }
  }, [testStarted, timeLeft]);

  //Upto give Test Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setMidnightTime(getTimeLeftUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setIsCompleted(false);
    setTestStarted(false);
    setScore(0);
    setTimeLeft(15 * 60); 
  };

  if (!quizData) return <div className="text-center mt-10">{!testStarted}</div>;
  const questions = quizData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setIsCorrect(option.is_correct);
    if (option.is_correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="flex flex-wrap items-center justify-center h-96 text-2xl font-semibold text-green-600">
        🎉 Quiz Completed! Your Score: {score}/{questions.length} 🎉
        <button
          onClick={restartQuiz}
          className="m-6 bg-lime-500 text-white p-1 rounded-lg hover:bg-lime-700 transition"
        >
          Restart
        </button>
      </div>
    );
  }



  return (
    <section className="py-10 px-4 bg-gray-100">
      {!testStarted ? (
        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="animate-ping absolute w-3 h-3 bg-red-500 rounded-full"></span>
            <span className=" w-3 h-3 bg-red-500 rounded-full"></span> Live Test
          </h2>
          <div className="mt-4 p-4 border rounded-lg bg-sky-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Duration: 15 min</span>
              <span className="text-sm text-gray-600 flex items-center gap-1">
                ⏳ Time Left: {midnightTime}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{quizData.title}</h3>
            <p className="text-gray-600">
              {quizData.topic}
            </p>
            <button
              onClick={() => setTestStarted(true)}
              className="mt-4 bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-700 transition"
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg mt-10  bg-slate-300">
          <div className="flex justify-end">
            <span className="text-sm text-gray-600 ">⏳ Time Left: {formatTime(timeLeft)}</span>
          </div>
          <h2 className="text-xl font-semibold text-center">{quizData.title}</h2>
          <p className="text-lg mt-4">{currentQuestion.description}</p>

          <div className="mt-4 space-y-2">
            {currentQuestion.options.map((option) => {
              let buttonClass = "w-full p-3 border rounded-lg text-left bg-gray-200 hover:bg-gray-300";
              if (selectedOption !== null) {
                if (option.is_correct) {
                  buttonClass = "w-full p-3 border rounded-lg text-left bg-green-500 text-white";
                } else if (selectedOption === option.id) {
                  buttonClass = "w-full p-3 border rounded-lg text-left bg-red-500 text-white";
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className={buttonClass}
                  disabled={selectedOption !== null}
                >
                  {option.description}
                </button>
              );
            })}
          </div>

          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={handleNext}
              className="w-20 bg-lime-500 text-white py-1 rounded-lg hover:bg-blue-600"
              disabled={selectedOption === null}
            >
              {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
