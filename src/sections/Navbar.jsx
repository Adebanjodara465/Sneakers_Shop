import logo from "../assets/sneaks/Dlogo.png";
import image from "../assets/image.png";
import { navItems } from "../data";

function Navbar() {
    return (
        <div className="w-full flex items-center justify-between h-[80px] md:px-[120px] px-5">
           
            <div className="w-full relative flex items-center gap-2"> {/*to stack them side by side */}
             <img src={image} alt="logo" className="cursor-pointer w-[60px]" />
             <img src={logo} alt="Daruto's Sneakesz" className="cursor-pointer w-[120px]" />
            </div> 
            <nav>
            <div className="hidden w-full lg:flex items-center justify-center gap-[40px]">
               {navItems.map((item, index) => (
                <a href={item.path} key={index} className="text-gray-700 hover:text-[var(--color-main)] font-medium">
                  {item.title}  
                </a>
               ))}
            </div>
           </nav>
        </div>
    )
}

export default Navbar;