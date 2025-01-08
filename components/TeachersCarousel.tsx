'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Teacher {
  name: string
  grade: string
  info: string
  image: string
}

interface TeachersCarouselProps {
  teachers: Teacher[]
}

const TeachersCarousel: React.FC<TeachersCarouselProps> = ({ teachers }) => {
  const [currentTeacher, setCurrentTeacher] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeacher((prev) => (prev + 1) % teachers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [teachers.length])

  const navigateTeacher = (direction: 'next' | 'prev') => {
    setCurrentTeacher((prev) => {
      if (direction === 'next') {
        return (prev + 1) % teachers.length
      } else {
        return (prev - 1 + teachers.length) % teachers.length
      }
    })
  }

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentTeacher * 100}%)` }}
      >
        {teachers.map((teacher, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={300}
                  height={300}
                  className="rounded-full shadow-md"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-xl text-blue-600 mb-4">{teacher.grade}</p>
                <p className="text-gray-600 text-lg">{teacher.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 focus:outline-none transition-transform duration-200 ease-in-out hover:scale-110 z-10"
        onClick={() => navigateTeacher('prev')}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 focus:outline-none transition-transform duration-200 ease-in-out hover:scale-110 z-10"
        onClick={() => navigateTeacher('next')}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="flex justify-center mt-8 space-x-2">
        {teachers.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ease-in-out ${
              currentTeacher === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentTeacher(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default TeachersCarousel

