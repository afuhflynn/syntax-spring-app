"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function CommunityPage() {
  const [question, setQuestion] = useState("")
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: "Alice",
      title: "How to optimize recursive functions?",
      content:
        "I'm working on a problem that requires recursive function calls, but it's not performing well for large inputs. Any tips on optimizing recursive functions?",
      answers: 3,
    },
    {
      id: 2,
      user: "Bob",
      title: "Best practices for error handling in Python",
      content:
        "I'm building a large Python application and want to implement robust error handling. What are some best practices or patterns I should follow?",
      answers: 5,
    },
  ])

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the question to your backend
    // For demo purposes, we'll just add it to the local state
    setQuestions([
      {
        id: questions.length + 1,
        user: "You",
        title: question,
        content: "",
        answers: 0,
      },
      ...questions,
    ])
    setQuestion("")
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Community</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ask a Question</CardTitle>
        </CardHeader>
        <form onSubmit={handleAskQuestion}>
          <CardContent>
            <Textarea
              placeholder="What's your programming question?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="mb-4"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Post Question</Button>
          </CardFooter>
        </form>
      </Card>

      <div className="space-y-6">
        {questions.map((q) => (
          <Card key={q.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{q.user[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{q.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Asked by {q.user}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{q.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                {q.answers} {q.answers === 1 ? "Answer" : "Answers"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

