import { useState, useEffect } from "react";
import {ChevronLeft, ChevronRight, ShoppingCart, CreditCard } from 'lucide-react'; //for amazing svgs
import { product } from "../data";
import Popup from "./Popup";


function Hero(){
    const [mainImage, setMainImage] = useState(product[0].images[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false); //stating the popup for visibility; read more later
    const [popupMessage, setPopupMessage] = useState("");
 
    // Update the mainImage when currentImageIndex changes (for the mobile view)
    useEffect(() => {
      setMainImage(product[0].images[currentImageIndex]);
    }, [currentImageIndex]);
    
    //to the previous image for the arrows on mobile
    const goToPreviousImage =() => {
      setCurrentImageIndex ((prevIndex) =>
      prevIndex === 0 ? product[0].images.length - 1 : prevIndex - 1);
    };

    // Function to navigate to the next image in mobile view
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
      prevIndex === product[0].images.length - 1 ? 0 : prevIndex + 1);
    };

    //function to show the  popup with a specific message
    const handleShowPopup = (message) => {
      setPopupMessage(message);  //setting the message to be displayed
      setShowPopup(true);    //making the popup visible
    };

    //hiding the popup- a manual close button
    const handleClosePopup = () => {
      setShowPopup(false);
      setPopupMessage("");
    };

  // Effect to hide the popup automatically after a few seconds (optional, can be removed if using manual close only)
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false); // Hide the popup
        setPopupMessage(""); // Clear the message
      }, 3000); // Popup will disappear after 3 seconds (3000 milliseconds)
    }
    // Cleanup function: This runs if the component unmounts or if showPopup changes before the timer finishes
    return () => clearTimeout(timer);
  }, [showPopup]); // This effect runs whenever showPopup changes 
    return(
        <section id="home" className=" bg-orange-300 min-h-screen font-sans flex-items-center justify-center py-8 px-4">
          
            <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden md:flex md:flex-row p-6">

              {/* Image Section */} 
              <div className="md:w-1/2 flex flex-col items-center justify-center p-4 relative">

              {/* Main image, the big one on lg screens */}
                <div className="relative w-full aspect-w-4 aspect-h-3 md:aspect-w-auto md:h-auto flex items-center justify-center">
                    <img src={mainImage} alt="Sneaker" className="h-[300px] w-[300px] object-cover rounded-lg shadow-md"/>
                      {/* buttons */}
                    <button onClick = {goToPreviousImage}
                    aria-label="Previous image" //the hover thingy 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 bg-opacity-75 p-2 rounded-full shadow-md md:hidden focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 hover:bg-opacity-100">
                      <ChevronLeft />
                    </button>
                    <button onClick={goToNextImage}
                    aria-label="Next image" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 bg-opacity-75 p-2 rounded-full shadow-md md:hidden focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 hover:bg-opacity-100">
                      <ChevronRight />
                    </button>
                </div>

                <div className="hidden md:flex gap-4 mt-6 justify-center">
                    {product[0].images.map((img, index) => (
                        <img key={index} 
                        src={img} 
                        alt={`Preview ${index + 1}`} 
                        className={`w-20 h-20 object-cover rounded cursor-pointer shadow-sm transition-all duration-200 border-2 
                          ${mainImage === img ? "border-main" : "border-transparent"}`}
                        onClick = {() => setMainImage(img)}/>
                    ))}
                </div>
              </div>

              <div className="md:w-1/2 p-4 md:pl-8 flex flex-col justify-center">
              
              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">{product[0].name}</h1>
              <div className="flex items-baseline mb-4">

                   <p className="text-lg text-orange-700 font-semibold">{product[0].dprice}</p>
                   {/*DISCOUNT!*/}
                   {product[0].price && product[0].price !== product[0].dprice && (
                    <p className="text-gray-500 line-through text-base">
                      {product[0].price}
                    </p>
                   )}
              </div>   
             
              <p className="text-gray-700 text-base mb-6 leading-relaxed">{product[0].description}</p>

              {/* buttonsss */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button 
                onClick={() => handleShowPopup("Item has been added to cart! Yay!")} //Triggering the popup
                className="flex-1 bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />Add to Cart</button>
                <button
                onClick={() => handleShowPopup("Proceed to checkout dear customer!")}
                 className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 mr-2" />Buy Now</button>
              </div>
              </div>
            </div>
          {/* Conditionally render the Popup component here, outside the buttons */}
         {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
        </section>
    )
}

export default Hero;