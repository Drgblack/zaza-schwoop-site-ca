"use client"

import type React from "react"
import SchwoopFooter from "@/components/schwoop-footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const [tiktokUrl, setTiktokUrl] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!tiktokUrl.trim()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const scrollToForm = () => {
    document.getElementById("submission-form")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1E1F4A] flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="animate-bounce">
            <div className="text-8xl mb-4">🎉</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nice one! You're officially in the{" "}
            <span className="bg-gradient-to-r from-[#B57EDC] to-[#F9B87F] bg-clip-text text-transparent">
              Schwoopverse
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
            Follow @schwoopapp and check your DMs — you might get early access or a feature named after you 👀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={() => window.open("https://tiktok.com/@schwoopapp", "_blank")}
              className="bg-[#86BA90] hover:bg-[#86BA90]/90 text-[#1E1F4A] font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Follow @schwoopapp 📱
            </Button>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-[#B57EDC] text-[#B57EDC] hover:bg-[#B57EDC] hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300"
            >
              Submit Another 🔄
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1E1F4A] flex flex-col text-white">
      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#B57EDC] to-[#F9B87F] bg-clip-text text-transparent">Schwoop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your AI-powered study companion is coming soon. Get ready to transform your academic chaos into organized
            success! 🚀
          </p>
          <div className="space-y-4">
            <div className="text-6xl animate-bounce">📚</div>
            <p className="text-gray-400">Scroll down to see the footer in action!</p>
          </div>
        </div>
      </main>

      {/* Submission Form */}
      <section id="submission-form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Drop your TikTok link here to join the{" "}
              <span className="bg-gradient-to-r from-[#B57EDC] to-[#F9B87F] bg-clip-text text-transparent">
                Schwoopverse
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="url"
                  placeholder="https://tiktok.com/@yourhandle/video/..."
                  value={tiktokUrl}
                  onChange={(e) => setTiktokUrl(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl px-6 py-4 text-lg focus:border-[#86BA90] focus:ring-[#86BA90] transition-all duration-300"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || !tiktokUrl.trim()}
                className="w-full bg-[#86BA90] hover:bg-[#86BA90]/90 disabled:bg-gray-600 text-[#1E1F4A] font-bold px-8 py-4 rounded-2xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#86BA90]/25 group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-[#1E1F4A]/30 border-t-[#1E1F4A] rounded-full animate-spin"></div>
                    Rescuing...
                  </span>
                ) : (
                  <span className="group-hover:animate-pulse">Rescue Me 🔥</span>
                )}
              </Button>
            </form>

            <p className="text-center text-gray-400 mt-6 text-sm">
              Make sure your TikTok is public so we can see your chaos! 👀
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <SchwoopFooter />
    </div>
  )
}
