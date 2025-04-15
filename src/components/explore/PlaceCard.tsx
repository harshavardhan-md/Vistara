
import { Heart, Star, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface PlaceCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  rating: number;
  likes: number;
  category: string;
  isLiked?: boolean;
}

const PlaceCard = ({
  id,
  title,
  location,
  image,
  description,
  rating,
  likes,
  category,
  isLiked = false,
}: PlaceCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Link to={`/explore/${id}`}>
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge
            className="absolute top-3 left-3 bg-primary/80 hover:bg-primary"
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
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            <div className="flex items-center space-x-1 text-sm">
              <Star size={16} className="fill-vistara-gold text-vistara-gold" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>

          <div className="flex justify-between items-center pt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Heart size={14} className="mr-1" />
              <span>{likeCount} likes</span>
            </div>
            <span className="font-medium text-foreground">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
