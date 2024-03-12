import React from "react";
import './packagecard.css';

const packageCard = ({product})=>{
    return(
        <div className="packageCard w-[15rem] m-3 transition-all cursor-pointer bg-black">
            <div className="h-[12rem]">
            <img className="object-cover object-left-top" src={product.imageURL} alt="" style={{padding:"15px 2px 2px 2px"}} />
            </div>

            <div className="textPart bg-black p-3 text-white">
                <div>
                    <p className="font-bold opacity-60">
                        {product.packageName}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">
                        ${product.packageCost}
                    </p>
                    <p className="flex items-center space-x-2">
                        {product.category}
                    </p>
                    <p className="text-green-600 font-semibold">
                        {product.discount}% off
                    </p>
                </div>
            </div>
        </div>
    )
}

export default packageCard;