"use client";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="relative flex md:gap-2 w-full flex-grow md:p-4 p-2"
        >
          <Textarea
            rows={2}
            autoFocus
            onChange={handleInputChange}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
                setInput("");
              }
            }}
            placeholder="Enter your question..."
          />

          <Button size="icon" title="Send" type="submit">
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
