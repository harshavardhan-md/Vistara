import { useState, useEffect } from "react";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ReviewSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const [formData, setFormData] = useState({
    name: "",
    visit: "",
    rating: 5,
    comment: "",
  });

  // Load reviews from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      setAllReviews(JSON.parse(saved));
    } else {
      // Default reviews if no saved data
      setAllReviews([
        {
          name: "Priya Sharma",
          visit: "Visited April 2023",
          rating: 5,
          comment:
            "An incredible place to experience India's ancient history. The architectural marvels are stunning, especially the Vittala Temple and its musical pillars. I recommend hiring a local guide to truly understand the historical significance.",
        },
        {
          name: "Rahul Menon",
          visit: "Visited March 2023",
          rating: 4,
          comment:
            "The landscape is otherworldly with huge boulders and ancient ruins. Best visited during early morning or late afternoon when the light is perfect for photography. December-February is ideal weather-wise. Don't miss the sunset from Matanga Hill!",
        },
      ]);
    }
  }, []);

  // Save reviews to localStorage when changed
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(allReviews));
  }, [allReviews]);

  const handleAddReview = () => {
    const newReview = { ...formData };
    setAllReviews([newReview, ...allReviews]);
    setFormData({ name: "", visit: "", rating: 5, comment: "" });
    setIsDialogOpen(false);
  };

  const getInitials = (name: string) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="bg-card rounded-xl shadow-sm border p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MessageCircle size={20} className="mr-2 text-primary" />
          <h2 className="text-2xl font-semibold">Visitor Reviews</h2>
        </div>
        <Button size="sm" onClick={() => setIsDialogOpen(true)}>
          Write a Review
        </Button>
      </div>

      <div className="space-y-6">
        {allReviews.slice(0, visibleReviews).map((review, idx) => (
          <div key={idx} className="border-b pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium mr-3">
                {getInitials(review.name)}
              </div>
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{review.visit}</span>
                  <span className="mx-2">•</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={
                          star <= review.rating
                            ? "fill-vistara-gold text-vistara-gold"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{review.comment}</p>
          </div>
        ))}

        {visibleReviews < allReviews.length && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setVisibleReviews(allReviews.length)}
          >
            View All Reviews
          </Button>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              placeholder="Visited Month (e.g. March 2024)"
              value={formData.visit}
              onChange={(e) =>
                setFormData({ ...formData, visit: e.target.value })
              }
            />
            <div className="flex items-center gap-2">
              <span className="text-sm">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  onClick={() =>
                    setFormData({ ...formData, rating: star })
                  }
                  className={
                    star <= formData.rating
                      ? "cursor-pointer fill-vistara-gold text-vistara-gold"
                      : "cursor-pointer text-muted"
                  }
                />
              ))}
            </div>
            <Textarea
              placeholder="Your review"
              rows={4}
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            />
            <Button
              className="w-full mt-2"
              onClick={handleAddReview}
              disabled={
                !formData.name || !formData.visit || !formData.comment
              }
            >
              Submit Review
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewSection;
