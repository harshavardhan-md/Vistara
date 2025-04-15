import { useState, useEffect } from "react";
import { products } from "@/data/products";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProductCard from "@/components/shop/ProductCard";
import { Search, Filter, ShoppingBag, X, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('vistara-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vistara-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: any) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if product already in cart
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new product to cart
        return [...prevItems, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        }];
      }
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handlePurchase = () => {
    setIsPurchaseComplete(true);
    
    // Clear cart after successful purchase (with a delay)
    setTimeout(() => {
      setCartItems([]);
      setIsPurchaseComplete(false);
      setIsCartOpen(false);
    }, 2000);
  };

  const filteredProducts = products.filter((product) => {
    // Filter by search term
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
    
    // Filter by price range
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "priceLow") {
      return a.price - b.price;
    } else if (sortBy === "priceHigh") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="Shop Heritage"
          description="Support skilled artisans by purchasing authentic handcrafted products. Each purchase preserves cultural traditions and supports the regional economy."
          bgImage="https://www.waytoindia.com/packageimages/Karnataka-Heritage-Tour2.jpg"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search products, artisans, or locations..."
                className="pl-10 bg-white/80 backdrop-blur-sm border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="secondary" 
              className="w-full md:w-auto"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={18} className="mr-2" />
              View Cart ({cartItemCount})
            </Button>
          </div>
        </PageHeader>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'all' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('all')}
                  >
                    All Products
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Textiles' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Textiles')}
                  >
                    Textiles & Fabrics
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Pottery' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Pottery')}
                  >
                    Pottery & Ceramics
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Painting' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Painting')}
                  >
                    Paintings & Art
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Metalwork' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Metalwork')}
                  >
                    Metalwork
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Woodwork' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Woodwork')}
                  >
                    Woodwork
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Sculpture' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Sculpture')}
                  >
                    Sculptures
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[0, 15000]}
                    max={15000}
                    step={500}
                    value={priceRange}
                    onValueChange={(values) => setPriceRange(values)}
                  />
                  <div className="flex items-center justify-between">
                    <div className="bg-muted px-3 py-1 rounded text-sm">
                      ₹{priceRange[0]}
                    </div>
                    <div className="bg-muted px-3 py-1 rounded text-sm">
                      ₹{priceRange[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} products
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter size={14} />
                      <span>Sort: {
                        sortBy === "popular" 
                          ? "Most Popular" 
                          : sortBy === "priceLow" 
                            ? "Price: Low to High" 
                            : "Price: High to Low"
                      }</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy("popular")}>
                      Most Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("priceLow")}>
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("priceHigh")}>
                      Price: High to Low
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      description={product.description}
                      price={product.price}
                      artisan={product.artisan}
                      category={product.category}
                      likes={product.likes}
                      onAddToCart={() => addToCart(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button onClick={() => {
                    setSearchTerm("");
                    setCategory("all");
                    setPriceRange([0, 15000]);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Shopping Cart Dialog */}
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Shopping Cart</DialogTitle>
            <DialogDescription>
              {cartItems.length === 0 
                ? "Your cart is empty. Start shopping to add items." 
                : `You have ${cartItemCount} items in your cart.`}
            </DialogDescription>
          </DialogHeader>
          
          {isPurchaseComplete ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Purchase Successful!</h3>
              <p className="text-muted-foreground text-center">
                Thank you for supporting local artisans!
              </p>
            </div>
          ) : (
            <>
              {cartItems.length > 0 ? (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{item.name}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <div className="text-sm text-muted-foreground">
                            ₹{item.price.toLocaleString()} × {item.quantity}
                          </div>
                          <div className="font-medium">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 ml-2 text-destructive" 
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              
              {cartItems.length > 0 && (
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold text-lg">₹{getCartTotal().toLocaleString()}</span>
                  </div>
                  <Button className="w-full" onClick={handlePurchase}>
                    Purchase Now
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;