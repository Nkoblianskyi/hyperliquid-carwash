"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function SurveySection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: "How often do you wash your car?",
      options: ["Weekly", "Bi-weekly", "Monthly", "Rarely"],
    },
    {
      question: "What's most important to you in car care?",
      options: ["Paint Protection", "Interior Cleanliness", "Time Efficiency", "Comprehensive Care"],
    },
    {
      question: "What's your preferred service style?",
      options: ["Quick Express", "Detailed Premium", "Full Service", "DIY with Guidance"],
    },
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getRecommendation = () => {
    if (answers.includes("Paint Protection") || answers.includes("Detailed Premium")) {
      return "Premium Detailing Package"
    }
    if (answers.includes("Quick Express") || answers.includes("Time Efficiency")) {
      return "Express Wash Service"
    }
    return "Complete Care Package"
  }

  const resetSurvey = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Service</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Take our quick survey to discover which service best matches your needs and preferences.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              {showResult ? "Your Recommendation" : `Question ${currentQuestion + 1} of ${questions.length}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center">{questions[currentQuestion].question}</h3>
                <RadioGroup onValueChange={handleAnswer} className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We recommend:</h3>
                  <p className="text-2xl font-serif font-bold text-gray-800">{getRecommendation()}</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetSurvey} variant="outline">
                    Take Again
                  </Button>
                  <Button asChild className="bg-gray-900 hover:bg-gray-800">
                    <a href="/contact">Book This Service</a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
