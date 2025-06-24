import React, { useState, useEffect, useRef } from 'react';
import words from './wordlist'; // массив слов для тренировки

export default function KeyTrainer() {
  const [wordList, setWordList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongIndexes, setWrongIndexes] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    generateWords();
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setWpm(correctCount * 2); // 30 секунд = 0.5 минуты => * 2
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  const generateWords = () => {
    const selectedWords = Array.from({ length: 50 }, () => words[Math.floor(Math.random() * words.length)]);
    setWordList(selectedWords);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (!isRunning && timeLeft > 0) setIsRunning(true); // запускаем таймер при первом вводе
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      const currentWord = wordList[currentIndex];
      if (inputValue.trim() === currentWord) {
        setCorrectCount((c) => c + 1);
      } else {
        setWrongCount((c) => c + 1);
        setWrongIndexes((prev) => [...prev, currentIndex]);
      }
      setInputValue('');
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setCorrectCount(0);
    setWrongCount(0);
    setWrongIndexes([]);
    setCurrentIndex(0);
    setInputValue('');
    setTimeLeft(30);
    setIsRunning(false);
    setWpm(null);
    generateWords();
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full p-6 bg-white shadow-2xl rounded-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Typing Trainer</h1>

        <div className="text-center text-sm mb-4">
          {isRunning && timeLeft > 0 && <span>Осталось времени: <strong>{timeLeft}s</strong></span>}
          {!isRunning && wpm !== null && <span>Твой WPM: <strong>{wpm}</strong></span>}
        </div>

        <div className="flex flex-wrap gap-2 text-lg leading-relaxed font-mono border p-4 rounded-md bg-gray-50 min-h-[120px]">
          {wordList.map((word, index) => {
            let colorClass = 'text-gray-600';
            if (index === currentIndex) {
              colorClass = 'text-blue-600 underline';
            } else if (index < currentIndex) {
              colorClass = wrongIndexes.includes(index)
                ? 'text-red-600 underline decoration-red-500'
                : 'text-green-600';
            }
            return (
              <span key={index} className={colorClass}>
                {word}
              </span>
            );
          })}
        </div>

        <input
          ref={inputRef}
          type="text"
          className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Начни печатать..."
          disabled={!isRunning && timeLeft === 0}
        />

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>Правильно: <strong>{correctCount}</strong></span>
          <span>Ошибки: <strong>{wrongCount}</strong></span>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200"
          >
            Начать заново
          </button>
        </div>
      </div>
    </div>
  );
}
