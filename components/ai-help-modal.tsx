"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Send } from "lucide-react";
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

const maxLength = 300;
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
  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { aiSettings } = useStore();
  const username = "afuhflynn"; // TODO: Change to real user name
  const [conversation, setConversation] = useState<
    Array<{ role: "user" | "model"; content: string }>
  >([
    {
      role: "model",
      content: `Hi ${username}! I'm SyntaxSpring Code Assist.\nHow can I help you with "${title}" challenge. What specific help do you need?`,
    },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim() || isLoading) return;

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: question }]);

    // Clear input
    setQuestion("");

    // Set loading state
    setIsLoading(true);

    try {
      const res = await axios.post<{ response: string }>("/api/ai-assistance", {
        question,
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

      // Add AI response to conversation
      setConversation([
        ...conversation,
        { role: "user", content: question },
        { role: "model", content: aiResponse },
      ]);
    } catch (error: any) {
      let err = "";
      if (error.response.data.message) {
        err = error.response.data.message;
      } else {
        err = error.message;
      }
      setConversation([
        ...conversation,
        { role: "user", content: question },
        { role: "model", content: err },
      ]);
      console.error("Error getting AI response:", error);
    } finally {
      setIsLoading(false);
    }
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
            <div className="p-4 h-[400px] overflow-y-auto">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 mb-4",
                    message.role === "model"
                      ? "items-start"
                      : "items-start flex-row-reverse"
                  )}
                >
                  {message.role === "model" && (
                    <Avatar className="h-8 w-8 bg-secondary">
                      <Image
                        src={
                          "https://res.cloudinary.com/duzg7l0eo/image/upload/v1742920199/fav-icon_mnoce0.png"
                        }
                        alt="Syntax spring logo"
                        width={40}
                        height={40}
                        className="text-xs font-medium text-primary-foreground"
                      />
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg p-3 max-w-[80%]",
                      message.role === "model"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    <div className="whitespace-pre-wrap text-sm response">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mb-4 items-start">
                  <Avatar className="h-8 w-8 bg-secondary">
                    <Image
                      src={
                        "https://res.cloudinary.com/duzg7l0eo/image/upload/v1742920199/fav-icon_mnoce0.png"
                      }
                      alt="Syntax spring logo"
                      width={40}
                      height={40}
                      className="text-xs font-medium text-primary-foreground"
                    />
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted flex flex-row items-center gap-2">
                    Is Thinking... <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Add a message to tailore the response..."
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
