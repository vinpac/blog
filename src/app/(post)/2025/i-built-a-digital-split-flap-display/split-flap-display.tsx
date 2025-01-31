"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SplitFlapChar } from "./split-flap-char";
import { useSound } from "use-sound";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

export function SplitFlapDisplay() {
  const [text, setText] = useState("HELLO");
  const [input, setInput] = useState("");
  const isPlayingRef = useRef(false);
  const [play, { sound }] = useSound("/sounds/split-flap-display.mp3", {
    interrupt: true,
    onstart: () => {
      isPlayingRef.current = true;
    },
    onend: () => {
      isPlayingRef.current = false;
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText(input.replace(/[^A-Z0-9 ]/g, " "));
  };

  const playingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onChangeChar = () => {
    if (!playingTimeoutRef.current) {
      play();
      isPlayingRef.current = true;
    } else {
      clearTimeout(playingTimeoutRef.current);
    }

    playingTimeoutRef.current = setTimeout(() => {
      playingTimeoutRef.current = null;
      sound?.seek(8.86);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="p-4 rounded-lg bg-red-500 relative shadow-xl border border-red-700">
        <div className="bg-red-200 absolute top-0.5 left-2  rounded right-2 h-0.5" />

        <div className="flex gap-3">
          {text.split("").map((char, index) => (
            <SplitFlapChar
              key={index}
              targetChar={char}
              chars={CHARS}
              onChangeChar={onChangeChar}
            />
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter text"
          maxLength={20}
          className="w-64"
        />
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}
