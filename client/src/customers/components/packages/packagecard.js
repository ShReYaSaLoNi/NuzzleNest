import React from "react";
import './packagecard.css';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({product})=>{
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate(`/package/${product._id}`)} className="packageCard w-[15rem] m-3 transition-all cursor-pointer " style={{backgroundColor:"#333A73"}}>
            <div className="h-[12rem]">
            <img className="object-cover object-left-top" src={product.imageURL} alt="" style={{padding:"15px 2px 2px 2px", width:250, height:200}} />
            </div>
  
            <div className="textPart p-2 text-white" style={{backgroundColor:"#333A73"}}>
                <div>
                    <p className="font-bold opacity-60">
                        {product.title}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">
                        ${product.price}
                    </p>
                    <p className="flex items-center space-x-2">
                        {product.category}
                    </p>
                    <p className="text-green-600 font-semibold">
                        $ {product.price - product.discountedPrice} off
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PackageCard;