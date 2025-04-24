"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Send, Copy, LucideCopyCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Logo from "./logo";
import { useStore } from "@/lib/store";

interface AIHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  language: string;
  examples: any;
  constraints: any;
  title: string;
  description: string;
  difficulty: string;
}

const maxLength = 1000;
export default function AIHelpModal({
  isOpen,
  onClose,
  code,
  language,
  examples,
  constraints,
  title,
  description,
  difficulty,
}: AIHelpModalProps) {
  // Initialize conversation as empty so the first message comes from the API.
  const [conversation, setConversation] = useState<
    Array<{ role: "user" | "model"; content: string }>
  >([]);
  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopyingText, setIsCopyingText] = useState<boolean>(false);
  const { aiSettings } = useStore();
  const bottomRef = useRef<null | HTMLSpanElement>(null);
  const chatContainerRef = useRef<null | HTMLDivElement>(null);

  const username = "afuhflynn"; // TODO: Replace with actual username if needed.
  const [copiedIndex, setCopiedIndex] = useState<null | number>(null);

  // Trigger the initial AI response when the modal opens.
  useEffect(() => {
    if (isOpen && conversation.length === 0 && !isLoading) {
      setIsLoading(true);
      axios
        .post<{ response: string }>("/api/ai-assistance", {
          prompt: `Introduce yourself as SyntaxSpring Code Assist and ask how you can help with the challenge titled "${title}".`,
          code,
          language,
          examples,
          constraints,
          title,
          description,
          difficulty,
          chatHistory: [], // No prior conversation.
          modelVersion: aiSettings.model,
        })
        .then((res) => {
          setConversation([{ role: "model", content: res.data.response }]);
        })
        .catch((error) => {
          console.error("Error getting initial AI response:", error);
          setConversation([
            {
              role: "model",
              content:
                "Sorry, I couldn't load the initial assistance. Please try sending a message.",
            },
          ]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [
    isOpen,
    conversation.length,
    isLoading,
    aiSettings.model,
    code,
    language,
    examples,
    constraints,
    title,
    description,
    difficulty,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    // Append the user message to conversation
    setConversation((prev) => [
      ...prev,
      { role: "user", content: question },
    ]);
    setQuestion("");
    setIsLoading(true);

    try {
      const res = await axios.post<{ response: string }>("/api/ai-assistance", {
        prompt: question,
        code,
        language,
        examples,
        constraints,
        title,
        description,
        difficulty,
        chatHistory: conversation,
        modelVersion: aiSettings.model,
      });
      const aiResponse = res.data.response;
      setConversation((prev) => [
        ...prev,
        { role: "user", content: question },
        { role: "model", content: aiResponse },
      ]);
    } catch (error: any) {
      let err = "";
      if (error.response?.data?.message) {
        err = error.response.data.message;
      } else {
        err = error.message;
      }
      setConversation((prev) => [
        ...prev,
        { role: "user", content: question },
        { role: "model", content: err },
      ]);
      console.error("Error getting AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to the bottom of the conversation when messages update.
  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleCopyResponse = (data: string, index: number) => {
    setIsCopyingText((prev) => !prev);
    setCopiedIndex(index);
    navigator.clipboard.writeText(data);
    setTimeout(() => {
      setIsCopyingText((prev) => !prev);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[80vh] rounded-lg border bg-card shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold flex flex-row items-center gap-1">
                <Logo />
              </h2>
              <Tooltip title="close" placement="top-end" arrow>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </Tooltip>
            </div>

            {/* Conversation */}
            <div
              className="p-4 h-[400px] overflow-y-auto"
              ref={chatContainerRef}
            >
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`relative ${cn(
                    "flex gap-3 mb-4",
                    message.role === "model"
                      ? "items-start"
                      : "items-start flex-row-reverse"
                  )}`}
                >
                  {message.role === "model" && (
                    <Avatar className="h-8 w-8 bg-secondary">
                      <Image
                        src="https://res.cloudinary.com/duzg7l0eo/image/upload/v1742920199/fav-icon_mnoce0.png"
                        alt="Syntax spring logo"
                        width={40}
                        height={40}
                        className="text-xs font-medium text-primary-foreground"
                      />
                    </Avatar>
                  )}
                  <div
                    className={`relative mb-4 ${cn(
                      "rounded-2xl p-3 max-w-[80%]",
                      message.role === "model"
                        ? "border border-muted"
                        : "bg-muted text-primary-foreground ml-auto"
                    )}`}
                  >
                    <div className="whitespace-pre-wrap text-sm response">
                      {message.content}
                    </div>
                    <Tooltip title="Copy" placement="right-end" arrow>
                      <button
                        className="absolute right-1 -bottom-5 text-muted-foreground"
                        onClick={() => handleCopyResponse(message.content, index)}
                        aria-label="Copy"
                      >
                        {isCopyingText && copiedIndex === index ? (
                          <LucideCopyCheck className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </Tooltip>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mb-4 items-start">
                  <Avatar className="h-8 w-8 bg-secondary">
                    <Image
                      src="https://res.cloudinary.com/duzg7l0eo/image/upload/v1742920199/fav-icon_mnoce0.png"
                      alt="Syntax spring logo"
                      width={40}
                      height={40}
                      className="text-xs font-medium text-primary-foreground"
                    />
                  </Avatar>
                  <div className="rounded-2xl p-3 bg-primary flex flex-row items-center gap-2">
                    Is Thinking... <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
              <span ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Add a message to tailor the response..."
                  className={`flex-1 min-h-[80px] resize-none ${
                    question.length >= maxLength ? "text-red-400" : ""
                  }`}
                />
                <Tooltip title="Send" placement="right-end" arrow>
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!question.trim() || isLoading}
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </Tooltip>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
