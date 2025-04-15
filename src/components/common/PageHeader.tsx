
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  bgImage?: string;
  icon?: ReactNode;
}

const PageHeader = ({
  title,
  description,
  children,
  className,
  bgImage,
  icon,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "relative py-16 md:py-24 bg-card",
        className
      )}
    >
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {icon && <div className="mb-4">{icon}</div>}
          <h1 className={cn(
            "heading-1 mb-4", 
            bgImage ? "text-white" : ""
          )}>
            {title}
          </h1>
          <p className={cn(
            "text-xl text-muted-foreground max-w-2xl", 
            bgImage ? "text-white/80" : ""
          )}>
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
