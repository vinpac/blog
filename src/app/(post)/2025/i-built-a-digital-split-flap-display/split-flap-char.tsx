"use client";

import React, { useState, useEffect, useRef } from "react";
import useSound from "use-sound";

interface SplitFlapCharProps {
  targetChar: string;
  chars: string;
  onChangeChar: (char: string) => void;
}

const FLIP_DELAY = 75;

export function SplitFlapChar({
  targetChar,
  chars,
  onChangeChar,
}: SplitFlapCharProps) {
  const [currentChar, setCurrentChar] = useState(chars[0]);
  const [nextChar, setNextChar] = useState(chars[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipKey, setFlipKey] = useState(0);

  useEffect(() => {
    let currentIndex = chars.indexOf(currentChar);
    const targetIndex = chars.indexOf(targetChar);

    if (currentIndex === targetIndex) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % chars.length;
      const next = chars[nextIndex];

      setIsFlipping(true);
      setNextChar(next);
      setFlipKey((prev) => prev + 1);
      onChangeChar(next);

      // After animation completes
      setTimeout(() => {
        console.log("timeout");
        setCurrentChar(next);
        setIsFlipping(false);
      }, FLIP_DELAY - 10);

      currentIndex = nextIndex;

      if (nextIndex === targetIndex) {
        clearInterval(interval);
      }
    }, FLIP_DELAY);

    return () => clearInterval(interval);
  }, [targetChar, chars, currentChar]);

  return (
    <div className="w-16 h-24 bg-red-950 rounded-sm ring-4 ring-red-950 text-white text-6xl font-bold relative overflow-hidden [perspective:1000px]">
      <div className="absolute inset-x-0 top-0 h-[calc(50%-.1rem)] bg-gray-950 dark:bg-gray-950 rounded-t overflow-hidden">
        <div className="absolute inset-x-0 top-4 flex items-center justify-center">
          {nextChar}
        </div>
      </div>

      <div className="absolute bg-gray-800 inset-x-0 bottom-0 h-[calc(50%-.1rem)] dark:bg-gray-800 rounded-b overflow-hidden">
        <div className="absolute inset-x-0 bottom-5 flex items-center justify-center">
          {currentChar}
        </div>
      </div>

      {/* Flipping top half showing next character */}
      {isFlipping && (
        <div
          key={flipKey}
          className="absolute z-50 bg-gray-800 dark:bg-gray-800 text-white mt-0.5 inset-x-0 top-0 duration-75 animate-flip h-[calc(50%-.1rem)]  rounded-t overflow-hidden"
          style={{
            animationDuration: `${FLIP_DELAY}ms`,
          }}
        >
          <div className="absolute inset-x-0 top-4 flex items-center justify-center -transform-rotate-180">
            {nextChar}
          </div>
        </div>
      )}
    </div>
  );
}
