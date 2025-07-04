"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({ day, isHeader }) => {
  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl transition-all hover:scale-105"
      } text-gray-400`}
    >
      <span className={`font-medium ${isHeader ? "text-xs text-gray-500" : "text-sm"}`}>{day}</span>
    </div>
  )
}

export function Calendar() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate()

  const bookingLink = `https://cal.com/giannihart/book-a-demo`

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames.map((day) => <CalendarDay key={`header-${day}`} day={day} isHeader />),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div key={`empty-start-${i}`} className="col-span-1 row-span-1 h-8 w-8" />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ]

    return days
  }

  return (
    <BentoCard height="h-auto" linkTo={bookingLink}>
      <div className="flex flex-col h-full gap-3">
        <div className="">
          <h2 className="mb-3 text-lg md:text-3xl font-semibold text-white">Contact the founders</h2>
          <motion.button
            className="w-full sm:w-auto bg-white text-[#111111] px-6 py-3 rounded-md text-sm font-semibold hover:bg-white/90 hover:text-[#111111] transition-colors duration-200 whitespace-nowrap shadow-sm hover:shadow-md flex-shrink-0"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Book a demo
          </motion.button>
        </div>
        <div className="flex justify-center flex-1">
          <div className="w-full max-w-[450px]">
            <div className="w-full rounded-[24px] border border-gray-500/20 bg-[#111111]/80 p-2 transition-colors group-hover:border-gray-400/30">
              <div
                className="w-full rounded-2xl border border-gray-600/10 bg-[#111111]/90 p-3 backdrop-blur-sm"
                style={{ boxShadow: "0px 2px 4px 0px rgba(200, 200, 200, 0.05) inset" }}
              >
                <div className="flex items-center space-x-2 text-white mb-3">
                  <p className="text-sm text-white">
                    <span className="font-medium">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full ">&nbsp;</span>
                  <p className="text-xs text-white">30 min call</p>
                </div>
                <div className="grid grid-cols-7 grid-rows-6 gap-2 px-2">{renderCalendarDays()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  height?: string
  rowSpan?: number
  colSpan?: number
  className?: string
  hideOverflow?: boolean
  linkTo?: string
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  hideOverflow = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col rounded-2xl border border-gray-500/20 bg-[#111111] p-6 backdrop-blur-sm transition-all hover:border-gray-400/30 hover:bg-[#111111]/90 w-full max-w-5xl mx-auto ${
        hideOverflow && "overflow-hidden"
      } ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
    >
      {linkTo && (
        <div className="absolute bottom-4 right-6 z-[999] flex h-12 w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
          <svg className="h-6 w-6 text-[#111111]" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.25 15.25V6.75H8.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 7L6.75 17.25"
            ></path>
          </svg>
        </div>
      )}
      {/* {showHoverGradient && (
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(221, 123, 187, 0.1) 0%, rgba(215, 159, 30, 0.1) 25%, rgba(90, 146, 44, 0.1) 50%, rgba(76, 120, 148, 0.1) 75%, rgba(221, 123, 187, 0.1) 100%)",
          }}
        ></div>
      )} */}
      {children}
    </div>
  )

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    ) : (
      <a href={linkTo} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
