
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, Sun, Moon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLanguage, languages } from "@/components/providers/LanguageProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { currentLanguage, setLanguage, translate } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const changeLanguage = (language: typeof languages[0]) => {
    setLanguage(language);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-bold text-2xl tracking-tight text-primary flex items-center gap-2">
            <span className="font-serif flex items-center gap-1">
              <img src="/vistara-logo.svg" alt="logo" className="w-9 h-9" />
              VISTARA
            </span>
          </h1>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("home")}
          </Link>
          <Link
            to="/explore"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/explore") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("explore")}
          </Link>
          <Link
            to="/stories"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/stories") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("storyshare")}
          </Link>
          <Link
            to="/shop"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/shop") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("shoplocal")}
          </Link>
          <Link
            to="/connect"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/connect") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("travelbuddy")}
          </Link>
          <Link
            to="/badges"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/badges") ? "text-primary" : "text-foreground"
            )}
          >
            {translate("badges")}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary text-foreground">
              More
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/knowledge-graph" className="w-full cursor-pointer">
                  {translate("culturalknowledge")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cultural-mapping" className="w-full cursor-pointer">
                  {translate("interactivemapping")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/educational-network" className="w-full cursor-pointer">
                  {translate("educationalnetwork")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select language">
                <Globe size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => changeLanguage(language)}
                  className={cn(
                    "cursor-pointer",
                    currentLanguage.code === language.code
                      ? "bg-accent text-accent-foreground"
                      : ""
                  )}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="rounded-full">
            <Link to="/explore">{translate("startexploring")}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("home")}
            </Link>
            <Link
              to="/explore"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/explore") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("explore")}
            </Link>
            <Link
              to="/stories"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/stories") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("storyshare")}
            </Link>
            <Link
              to="/shop"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/shop") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("shoplocal")}
            </Link>
            <Link
              to="/connect"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/connect") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("travelbuddy")}
            </Link>
            <Link
              to="/badges"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/badges") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("badges")}
            </Link>

            <Link
              to="/knowledge-graph"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/knowledge-graph") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("culturalknowledge")}
            </Link>

            <Link
              to="/cultural-mapping"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/cultural-mapping") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("interactivemapping")}
            </Link>

            <Link
              to="/educational-network"
              className={cn(
                "py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/educational-network") ? "text-primary" : "text-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {translate("educationalnetwork")}
            </Link>

            <div className="flex items-center space-x-4 py-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Select language">
                    <Globe size={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => changeLanguage(language)}
                      className={cn(
                        "cursor-pointer",
                        currentLanguage.code === language.code
                          ? "bg-accent text-accent-foreground"
                          : ""
                      )}
                    >
                      {language.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button asChild className="rounded-full w-full">
                <Link to="/explore" onClick={closeMobileMenu}>{translate("startexploring")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
