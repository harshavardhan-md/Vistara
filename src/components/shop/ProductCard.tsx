import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  artisan: {
    name: string;
    location: string;
  };
  category: string;
  likes: number;
  isLiked?: boolean;
  onAddToCart?: () => void; // New prop for add to cart function
}

const ProductCard = ({
  id,
  name,
  image,
  description,
  price,
  artisan,
  category,
  likes,
  isLiked = false,
  onAddToCart,
}: ProductCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge
            className="absolute top-3 left-3 bg-secondary/90 hover:bg-secondary text-secondary-foreground"
          >
            {category}
          </Badge>
          <button
            onClick={handleLikeClick}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full transition-colors",
              liked
                ? "bg-primary/90 text-white"
                : "bg-white/90 text-muted-foreground hover:text-primary"
            )}
            aria-label={liked ? "Unlike" : "Like"}
          >
            <Heart
              size={16}
              className={cn(liked ? "fill-current" : "")}
            />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
            <div className="text-lg font-semibold text-primary">
              ₹{price.toLocaleString()}
            </div>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <span>By {artisan.name}</span>
            <span className="mx-2">•</span>
            <MapPin size={14} className="mr-1" />
            <span>{artisan.location}</span>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>

          <div className="pt-3 flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <Heart size={14} className="mr-1" />
              <span>{likeCount} likes</span>
            </div>
            
            <Button
              size="sm"
              className="rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    
  );
};

export default ProductCard;