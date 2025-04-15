import { useState } from "react";
import { Calendar, MapPin, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TravelBuddyCardProps {
  id: string;
  user: {
    name: string;
    avatar: string;
    age?: number;
    gender?: string;
  };
  destination: string;
  fromDate: string;
  toDate: string;
  interests: string[];
  message: string;
  onConnect: (id: string) => void;
}

const TravelBuddyCard = ({
  id,
  user,
  destination,
  fromDate,
  toDate,
  interests,
  message,
  onConnect,
}: TravelBuddyCardProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      onConnect(id);
      setIsConnected(true);
      setIsConnecting(false);
    }, 1000);
  };

  return (
    <div className="feature-card">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <User size={14} className="mr-1" />
            <span>
              {user.age && `${user.age} years`}
              {user.gender && user.age && `, ${user.gender}`}
              {!user.age && user.gender && user.gender}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm font-medium">
          <MapPin size={16} className="mr-2 text-vistara-maroon" />
          <span>{destination}</span>
        </div>

        <div className="flex items-center text-sm">
          <Calendar size={16} className="mr-2 text-vistara-blue" />
          <span>
            {fromDate} - {toDate}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Interests:</div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge key={interest} variant="secondary">
              {interest}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Message:</div>
        <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
          "{message}"
        </p>
      </div>
      <Button
  onClick={handleConnect}
  disabled={isConnecting || isConnected}
  className={cn(
    "w-full rounded-full text-white",
    isConnected ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600",
    (isConnecting || isConnected) && "opacity-80"
  )}
>
  <MessageCircle size={16} className="mr-2" />
  {isConnected
    ? "Connected!"
    : isConnecting
    ? "Connecting..."
    : "Connect Now"}
</Button>

    </div>
  );
};

export default TravelBuddyCard;
