
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  pointsRequired: number;
  isEarned?: boolean;
  progress?: number;
}

const BadgeCard = ({
  id,
  name,
  icon,
  description,
  category,
  pointsRequired,
  isEarned = false,
  progress = 0,
}: BadgeCardProps) => {
  const progressPercentage = Math.min(Math.max(progress / pointsRequired * 100, 0), 100);

  return (
    <div className={cn(
      "feature-card relative overflow-hidden transition-all",
      isEarned ? "border-vistara-gold" : ""
    )}>
      {isEarned && (
        <div className="absolute top-3 right-3">
          <Award size={20} className="text-vistara-gold fill-vistara-gold" />
        </div>
      )}
      
      <div className="flex flex-col items-center text-center mb-4">
        <div className={cn(
          "w-18 h-18 rounded-full flex items-center justify-center mb-3",
          isEarned 
            ? "bg-vistara-gold/20" 
            : "bg-muted"
        )}>
          <img 
            src={icon} 
            alt={name} 
            className={cn(
              "w-14 h-12",
              !isEarned && "opacity-80"
            )} 
          />
        </div>
        
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
          {category}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mb-4">
        {description}
      </p>
      
      <div className="mt-auto">
        <div className="flex justify-between text-xs mb-1">
          <span>{progress} points</span>
          <span>{pointsRequired} needed</span>
        </div>
        
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full",
              isEarned ? "bg-vistara-gold" : "bg-vistara-blue"
            )}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="mt-3 text-sm text-center font-medium">
          {isEarned ? (
            <span className="text-vistara-gold">Badge Earned! 🎉</span>
          ) : (
            <span>{Math.round(progressPercentage)}% Complete</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
