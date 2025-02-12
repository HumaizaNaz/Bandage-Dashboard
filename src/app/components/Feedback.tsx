'use client'
import { useState } from "react"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { cn } from "@/lib/utils"

const mockFeedbacks = [
  {
    id: "FB-001",
    user: "Anna Kim",
    rating: 5,
    message: "This website is very user-friendly, easy to navigate and informative!",
    date: "2024-03-15",
  },
  {
    id: "FB-002",
    user: "James Lee",
    rating: 4,
    message: "Great design, but some areas can be optimized for faster loading.",
    date: "2024-03-14",
  },
  {
    id: "FB-003",
    user: "Maria Gomez",
    rating: 5,
    message: "I love the clean and modern interface. Makes it easy to use.",
    date: "2024-03-13",
  },
  {
    id: "FB-004",
    user: "David Wang",
    rating: 3,
    message: "The website is okay, but it takes a long time to load on my device.",
    date: "2024-03-12",
  },
  {
    id: "FB-005",
    user: "Sarah Lee",
    rating: 5,
    message: "Fantastic experience! Everything works smoothly, and the design is spot on.",
    date: "2024-03-11",
  },
  {
    id: "FB-006",
    user: "John Doe",
    rating: 4,
    message: "Good design and features, but I would appreciate more customization options.",
    date: "2024-03-10",
  },
  {
    id: "FB-007",
    user: "Chris Pratt",
    rating: 5,
    message: "Extremely intuitive, and the visuals are stunning. Highly recommend!",
    date: "2024-03-09",
  },
  {
    id: "FB-008",
    user: "Lisa Green",
    rating: 4,
    message: "Nice layout, but a few improvements could be made in the mobile version.",
    date: "2024-03-08",
  },
  {
    id: "FB-009",
    user: "Tommy Lee",
    rating: 3,
    message: "Decent overall, but there's a lot of unnecessary animations that slow down the experience.",
    date: "2024-03-07",
  },
  {
    id: "FB-010",
    user: "Linda Gray",
    rating: 5,
    message: "Perfect design! I especially love the minimalist approach. Great job!",
    date: "2024-03-06",
  },
  {
    id: "FB-011",
    user: "Jack Allen",
    rating: 4,
    message: "The website looks great, but the navigation menu could be more user-friendly.",
    date: "2024-03-05",
  },
  {
    id: "FB-012",
    user: "Jessica Black",
    rating: 5,
    message: "One of the best websites I've used. Everything is easily accessible and works flawlessly.",
    date: "2024-03-04",
  },
]

export default function Feedback() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(mockFeedbacks.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentFeedbacks = mockFeedbacks.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "h-4 w-4 transition-all duration-300",
          index < rating ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-200 stroke-gray-300"
        )}
      />
    ))
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-bold">User Feedback</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentFeedbacks.map((feedback) => (
          <Card key={feedback.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {feedback.user.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feedback.user}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">{renderStars(feedback.rating)}</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">{feedback.message}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-gray-500">{new Date(feedback.date).toLocaleDateString()}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
