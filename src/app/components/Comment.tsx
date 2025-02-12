'use client'
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

const mockComments = [
  {
    id: "CM-001",
    user: "Mark Jones",
    comment: "Love the clean UI! Hope to see more features soon.",
    date: "2024-03-10",
  },
  {
    id: "CM-002",
    user: "Emily Davis",
    comment: "This site is super intuitive! Will recommend it to my friends.",
    date: "2024-03-11",
  },
  {
    id: "CM-003",
    user: "John Smith",
    comment: "The design is sleek, but some pages could load faster.",
    date: "2024-03-12",
  },
  {
    id: "CM-004",
    user: "Olivia Brown",
    comment: "Really like the layout! It's easy to navigate.",
    date: "2024-03-13",
  },
  {
    id: "CM-005",
    user: "Lucas Miller",
    comment: "Great overall experience, would love to see a dark mode option.",
    date: "2024-03-14",
  },
  {
    id: "CM-006",
    user: "Sophia Wilson",
    comment: "The content is really helpful, but a search function would be great.",
    date: "2024-03-15",
  },
  {
    id: "CM-007",
    user: "Benjamin Moore",
    comment: "The interface is clean, but the font size is a bit small for readability.",
    date: "2024-03-16",
  },
  {
    id: "CM-008",
    user: "Ava Taylor",
    comment: "Love the color scheme! It’s very aesthetically pleasing.",
    date: "2024-03-17",
  },
  {
    id: "CM-009",
    user: "Ethan Anderson",
    comment: "The website's navigation is fantastic, but the speed could improve.",
    date: "2024-03-18",
  },
  {
    id: "CM-010",
    user: "Mia Thomas",
    comment: "Fantastic user experience! Keep up the great work.",
    date: "2024-03-19",
  },
  {
    id: "CM-011",
    user: "Jacob Harris",
    comment: "Overall, good design, but the text can be hard to read on some pages.",
    date: "2024-03-20",
  },
  {
    id: "CM-012",
    user: "Isabella Clark",
    comment: "Great site! Love the features, but some links need fixing.",
    date: "2024-03-21",
  },
]

export default function Comment() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(mockComments.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentComments = mockComments.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-bold">User Comments</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentComments.map((comment) => (
          <Card key={comment.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {comment.user.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{comment.user}</CardTitle>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">{comment.comment}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
