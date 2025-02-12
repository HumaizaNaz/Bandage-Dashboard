import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/app/types/types"

interface ProductReviewsDashboardProps {
  product: Product
}

export function ProductReviewsDashboard({ product }: ProductReviewsDashboardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "h-4 w-4 transition-all duration-300",
          index < rating ? "fill-yellow-400 stroke-yellow-400" : "fill-gray-200 stroke-gray-300",
        )}
      />
    ))
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-start space-x-4">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
          </div>
          <div>
            <p className="text-sm font-medium">Product Details</p>
            <div className="flex items-center mt-1">
              {renderStars(Math.round(product.rating))}
              <span className="ml-2 text-sm text-muted-foreground">({product.rating.toFixed(1)})</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Price: ${product.price}{" "}
              {product.oldPrice && <span className="line-through ml-2">${product.oldPrice}</span>}
            </p>
            <p className="text-sm text-muted-foreground">
              Category: {product.category} - {product.subCategory}
            </p>
            <p className="text-sm text-muted-foreground">Availability: {product.availability}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Description</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Available Colors</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, index) => (
                <span key={index} className="text-sm text-muted-foreground">
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}
        {product.sizeAvailability && product.sizeAvailability.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Available Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizeAvailability.map((size, index) => (
                <span key={index} className="text-sm text-muted-foreground">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

