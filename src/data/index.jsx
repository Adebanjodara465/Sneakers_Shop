import artem from "../assets/sneaks/artem.jpg"
import ryan_plomp from "../assets/sneaks/ryan_plomp.jpg"
import taylor_smith from "../assets/sneaks/taylor_smith.jpg"
import devin from "../assets/sneaks/devin.jpg"
import branislav from "../assets/sneaks/branislav.jpg"
import xavier from "../assets/sneaks/xavier.jpg"


export const navItems = [
    {title: "Home", path: "#home"},
    {title: "Sneakers", path: "#"},
    {title: "Support", path: "#"},
    {title: "Policy", path: "#"},  
];

export const product = [
    { name: "Sakura Best",
      id: "001",
      description:"Select from our pastel collection. Sakura Best, the best pastels of sneakers!",
      price: "$130.99",
      dprice: "$110.99",
      images: [
        artem,
        ryan_plomp,
        branislav,
        xavier,
        taylor_smith,
        devin
      ]
    }

];


export const message ={title: "You have added to your cart!"};