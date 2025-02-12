/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// import { useState } from "react"
// import { Search, Star, ShoppingBag, CalendarDays } from "lucide-react"
// import { Input } from "@/app/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { cn } from "@/lib/utils"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

// export interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface Product {
//   id: string
//   name: string
//   description: string
//   oldPrice: string
//   price: string
//   image: string
//   images: string[]
//   colors?: string[]
//   sizeAvailability?: string[]
//   rating?: number
//   material?: string
//   category?: string
//   availability?: string
//   reviews?: Review[]
// }

// async function getData(): Promise<Product[]> {
//   try {
//     const fetchData = await client.fetch(`
//       *[_type == "product"]{
//         _id,
//         name,
//         description,
//         category,
//         price,
//         oldPrice,
//         availability,
//         "image": image.asset->url,
//         "images": images[].asset->url,
//         colors,
//         sizeAvailability,
//         rating,
//         material,
//         reviews
//       }
//     `)
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return fetchData.map((prod: any) => ({
//       id: prod._id,
//       name: prod.name,
//       description: prod.description,
//       oldPrice: prod.oldPrice,
//       price: prod.price,
//       image: prod.image,
//       images: prod.images || [],
//       colors: prod.colors || [],
//       sizeAvailability: prod.sizeAvailability || [],
//       rating: prod.rating || 0,
//       material: prod.material || "",
//       category: prod.category || "",
//       availability: prod.availability || "Out of Stock",
//       reviews: Array.isArray(prod.reviews) ? prod.reviews : [],
//     }))
//   } catch (err) {
//     console.error("Error fetching data:", err)
//     return []
//   }
// }
// const [review, setReview] = useState<Review>({
//   name: "",
//   rating: 0,
//   comment: "",
//   date: "",
// });

//   // Submit review to the API route
//     // Submit review to the API route
//     const handleSubmitReview = async () => {
//       if (!product || !review.name || !review.comment || review.rating === 0) {
//         toast.error("Please fill out all fields and provide a rating.")
//         return
//       }
  
//       try {
//         const response = await fetch("/api/review", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             productId: product.id,
//             review: {
//               ...review,
//               date: new Date().toISOString(),
//             },
//           }),
//         })
  
//         const data = await response.json()
  
//         if (!response.ok) {
//           throw new Error(data.message || "Failed to submit review.")
//         }
  
//         setProduct((prevProduct) => {
//           if (!prevProduct) return data.updatedProduct
//           return {
//             ...prevProduct,
//             reviews: data.updatedProduct.reviews,
//           }
//         })
  
//         toast.success("Review submitted successfully!")
//         setReview({ name: "", rating: 0, comment: "", date: "" })
//       } catch (error) {
//         console.error("Error submitting review:", error)
//         toast.error(error instanceof Error ? error.message : "Failed to submit review.")
//       }
//     }
  
// const mockReviews = [
//   {
//     id: "REV-001",
//     customer: "John Doe",
//     rating: 5,
//     comment: "Absolutely love this product! Exceeded all my expectations and the quality is outstanding.",
//     product: "Premium Wireless Headphones",
//     date: "2024-03-15",
//   },
//   {
//     id: "REV-002",
//     customer: "Jane Smith",
//     rating: 4,
//     comment: "Good value for money, but the shipping took longer than expected.",
//     product: "Smart Fitness Tracker",
//     date: "2024-03-14",
//   },
//   {
//     id: "REV-003",
//     customer: "Mike Johnson",
//     rating: 2,
//     comment: "Product stopped working after 2 weeks. Very disappointed.",
//     product: "Bluetooth Speaker X200",
//     date: "2024-03-13",
//   },
//   {
//     id: "REV-004",
//     customer: "Sarah Wilson",
//     rating: 5,
//     comment: "Best purchase I've made this year! Highly recommend to everyone.",
//     product: "Ergonomic Office Chair",
//     date: "2024-03-12",
//   },
//   {
//     id: "REV-005",
//     customer: "Alex Chen",
//     rating: 3,
//     comment: "Decent product but the instructions were unclear.",
//     product: "Wireless Charging Pad",
//     date: "2024-03-11",
//   },
// ]

// export default function ReviewsGrid() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 6
//   const totalPages = Math.ceil(mockReviews.length / itemsPerPage)

//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentReviews = mockReviews.slice(indexOfFirstItem, indexOfLastItem)

//   const handlePageChange = (page: number) => {
//     if (page < 1 || page > totalPages) return
//     setCurrentPage(page)
//   }

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={cn(
//           "h-4 w-4 transition-all duration-300",
//           index < rating ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-200 stroke-gray-300",
//         )}
//       />
//     ))
//   }

//   return (
//     <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//           Customer Reviews
//         </h1>
//       </div>

//       <div className="flex flex-col sm:flex-row items-center gap-4">
//         <div className="relative flex-1 w-full">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//           <Input placeholder="Search reviews..." className="pl-10 w-full shadow-sm" />
//         </div>

//         <div className="flex gap-4 w-full sm:w-auto">
//           <Select defaultValue="all">
//             <SelectTrigger className="w-[140px] shadow-sm">
//               <SelectValue placeholder="Filter by rating" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Ratings</SelectItem>
//               <SelectItem value="5">5 Stars</SelectItem>
//               <SelectItem value="4">4 Stars</SelectItem>
//               <SelectItem value="3">3 Stars</SelectItem>
//               <SelectItem value="2">2 Stars</SelectItem>
//               <SelectItem value="1">1 Star</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {currentReviews.map((review) => (
//           <Card
//             key={review.id}
//             className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800"
//           >
//             <CardHeader className="pb-2">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
//                     {review.customer.charAt(0)}
//                   </div>
//                   <div>
//                     <CardTitle className="text-lg">{review.customer}</CardTitle>
//                     <div className="flex items-center gap-1 mt-1">{renderStars(review.rating)}</div>
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>

//             <CardContent className="pt-2">
//               <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{review.comment}</p>
//               <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                 <ShoppingBag className="h-4 w-4" />
//                 <span className="font-medium">{review.product}</span>
//               </div>
//             </CardContent>

//             <CardFooter className="border-t pt-4 flex items-center justify-between">
//               <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                 <CalendarDays className="h-4 w-4" />
//                 {new Date(review.date).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                 })}
//               </div>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault()
//                 handlePageChange(currentPage - 1)
//               }}
//               className={cn(currentPage > 1 ? "opacity-100" : "opacity-50 pointer-events-none")}
//             />
//           </PaginationItem>

//           {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//             <PaginationItem key={page}>
//               <PaginationLink
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault()
//                   handlePageChange(page)
//                 }}
//                 className={cn(
//                   page === currentPage ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-muted",
//                 )}
//               >
//                 {page}
//               </PaginationLink>
//             </PaginationItem>
//           ))}

//           <PaginationItem>
//             <PaginationNext
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault()
//                 handlePageChange(currentPage + 1)
//               }}
//               className={cn(currentPage < totalPages ? "opacity-100" : "opacity-50 pointer-events-none")}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { FaStar, FaRegStar } from "react-icons/fa"
import { Review } from "@/app/types/reviews"

interface Product {
  id: string
  name: string
  image: string
  rating?: number
  reviews?: Review[]
}

// Function to fetch data from Sanity
async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        "image": image.asset->url,
        rating,
        reviews
      }
    `)

    return fetchData.map((prod: any) => ({
      id: prod._id,
      name: prod.name,
      image: prod.image,
      rating: prod.rating || 0,
      reviews: Array.isArray(prod.reviews) ? prod.reviews : [],
    }))
  } catch (err) {
    console.error("Error fetching data:", err)
    return []
  }
}

const ProductPage = () => {
  const [productItems, setProductItems] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData()
      setProductItems(products)
    }
    fetchData()
  }, [])

  // Function to calculate average rating for each product
  const getAverageRating = (reviews: Review[] = []) => {
    if (reviews.length === 0) return 0
    return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  }

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Product List</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productItems.map((product) => (
           <div
           key={product.id}
           className="bg-white shadow-lg rounded-lg w-full sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto overflow-hidden cursor-pointer"
           onClick={() => openModal(product)}
         >
           {/* Responsive image */}
           <Image 
             src={product.image} 
             alt={product.name} 
             width={400} 
             height={400} 
             className="w-full h-[300px] object-cover" 
           />
           
           <div className="p-4">
             {/* Responsive text size */}
             <h3 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">{product.name}</h3>
         
             <div className="flex text-[#F3CD03] gap-2 my-2">
               {[...Array(5)].map((_, index) =>
                 index < getAverageRating(product.reviews) ? (
                   <FaStar key={index} size={20} />
                 ) : (
                   <FaRegStar key={index} size={20} />
                 )
               )}
             </div>
           </div>
         </div>
          ))}
        </div>
{/* MODAL FOR PRODUCT DETAILS & REVIEWS */}
{isModalOpen && selectedProduct && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[80%] max-w-2xl relative max-h-[80vh] overflow-y-auto">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
        onClick={closeModal}
      >
        &times;
      </button>

      {/* Product Details */}
      <div className="text-center">
        {/* Smaller Image */}
        <Image 
          src={selectedProduct.image} 
          alt={selectedProduct.name} 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg" 
        />
        <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
        <div className="flex justify-center text-[#F3CD03] gap-2 my-2">
          {[...Array(5)].map((_, index) =>
            index < getAverageRating(selectedProduct.reviews) ? (
              <FaStar key={index} size={24} />
            ) : (
              <FaRegStar key={index} size={24} />
            )
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Reviews</h3>
        <div className="max-h-[40vh] overflow-y-auto pr-2">
          {selectedProduct.reviews && selectedProduct.reviews.length > 0 ? (
            selectedProduct.reviews.map((review, index) => (
              <div key={index} className="border-t py-3">
                <p className="font-semibold">{review.name}</p>
                <div className="flex text-[#F3CD03] gap-2">
                  {[...Array(5)].map((_, idx) =>
                    idx < review.rating ? <FaStar key={idx} size={18} /> : <FaRegStar key={idx} size={18} />
                  )}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  )
}

export default ProductPage
