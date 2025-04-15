import { useState } from "react";
import { Heart, MessageSquare, Clock, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { stories } from "@/data/stories";

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: {
    name: string;
    avatar?: string;
  };
  postedAt: string;
  likes: number;
  comments: number;
  categories: string[];
  isLiked?: boolean;
}

const StoryCard = ({
  id,
  title,
  excerpt,
  thumbnail,
  author,
  postedAt,
  likes,
  comments,
  categories,
  isLiked = false,
}: StoryCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Find the full story details from stories array
  const fullStory = stories.find(story => story.id === id);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300" onClick={handleReadMore}>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
            {categories.slice(0, 2).map((category) => (
              <Badge
                key={category}
                className="bg-primary/80 hover:bg-primary text-xs sm:text-sm py-0.5"
              >
                {category}
              </Badge>
            ))}
            {categories.length > 2 && (
              <Badge className="bg-primary/80 hover:bg-primary text-xs sm:text-sm py-0.5">
                +{categories.length - 2}
              </Badge>
            )}
          </div>
          <button
            onClick={handleLikeClick}
            className={cn(
              "absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full transition-colors",
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

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{title}</h3>

          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center truncate">
              <User size={12} className="mr-1 flex-shrink-0" />
              <span className="truncate">{author.name}</span>
            </div>
            <div className="flex items-center flex-shrink-0">
              <Clock size={12} className="mr-1" />
              <span>{postedAt}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 sm:pt-2 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center">
                <Heart size={12} className="mr-1" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={12} className="mr-1" />
                <span>{comments}</span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="font-medium text-foreground p-0 hover:bg-transparent hover:text-primary text-xs sm:text-sm"
              onClick={handleReadMore}
            >
              Read More →
            </Button>
          </div>
        </div>
      </div>

      {/* Story Detail Dialog - Made responsive */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 w-[95vw]">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl pr-8">{title}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-2 sm:right-4 sm:top-4 h-8 w-8"
              onClick={() => setIsDialogOpen(false)}
            >
              {/* <X size={18} /> */}
            </Button>
          </DialogHeader>
          
          <div className="space-y-4 sm:space-y-6 mt-2">
            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-2">
                {author.avatar ? (
                  <img src={author.avatar} alt={author.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
                    <User size={16} className="sm:text-lg" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-sm sm:text-base">{author.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{postedAt}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Heart 
                    size={16} 
                    className={cn("mr-1", liked ? "fill-primary text-primary" : "")} 
                  />
                  <span className="text-sm">{likeCount}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={16} className="mr-1" />
                  <span className="text-sm">{comments}</span>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="secondary"
                  className="text-xs sm:text-sm"
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Main image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={thumbnail} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="prose prose-stone max-w-none text-sm sm:text-base">
              <p>{fullStory?.content || excerpt}</p>
            </div>
            
            {/* Media gallery */}
            {fullStory?.media && fullStory.media.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-medium">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {fullStory.media.map((item, index) => (
                    <div key={index} className="rounded-md overflow-hidden">
                      {item.type === 'image' ? (
                        <figure>
                          <img 
                            src={item.url} 
                            alt={item.caption} 
                            className="w-full h-auto object-cover"
                          />
                          {item.caption && (
                            <figcaption className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{item.caption}</figcaption>
                          )}
                        </figure>
                      ) : (
                        <figure>
                          <video 
                            src={item.url} 
                            controls 
                            className="w-full h-auto"
                          />
                          {item.caption && (
                            <figcaption className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{item.caption}</figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoryCard;