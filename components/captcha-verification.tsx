"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/lib/language-context"

export function CaptchaVerification() {
  const router = useRouter()
  const [captchaCode, setCaptchaCode] = useState("")
  const [userInput, setUserInput] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()

  const generateCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString()
    setCaptchaCode(code)
    setUserInput("")
    setError("")
  }

  useEffect(() => {
    generateCode()
  }, [])

  const handleVerify = async () => {
    if (userInput === captchaCode) {
      setIsLoading(true)
      router.push("/login")
    } else {
      setError(t.captcha.incorrectCode)
      setUserInput("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerify()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#1a1a1a] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1ed760]">{t.captcha.title}</h1>
          <p className="text-sm sm:text-base text-gray-400">{t.captcha.subtitle}</p>
        </div>

        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 sm:p-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">{t.captcha.codeLabel}</p>
          <p className="text-4xl sm:text-5xl font-bold text-white tracking-wider">{captchaCode}</p>
        </div>

        <div className="space-y-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t.captcha.inputPlaceholder}
            maxLength={4}
            className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 text-center text-lg tracking-wider"
          />
          {error && <p className="text-red-500 text-sm text-center">{t.captcha.incorrectCode}</p>}
        </div>

        <button
          onClick={handleVerify}
          disabled={isLoading || userInput.length !== 4}
          className="w-full py-3 bg-[#1ed760] hover:bg-[#1fdf64] disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-semibold rounded-full transition-colors shadow-lg shadow-[#1ed760]/20 hover:shadow-[#1ed760]/40"
        >
          {isLoading ? t.captcha.verifying : t.captcha.verifyButton}
        </button>

        <button
          onClick={generateCode}
          className="w-full py-3 bg-transparent hover:bg-[#2a2a2a] text-gray-400 hover:text-white font-semibold rounded-full transition-colors border border-gray-700"
        >
          {t.captcha.getNewCode}
        </button>

        <p className="text-xs sm:text-sm text-gray-500 text-center pt-4">{t.captcha.footerText}</p>
      </div>
    </div>
  )
}
