import { useState } from "react";
import { generateUserData } from "../services/datas";

const Cards = ({user}) => {

    const userData = generateUserData(user);
    const [dataDisplayed, setDataDisplayed] = useState(userData[0]?.text || '');
    
    const handleMouseOver = (text) => {
        setDataDisplayed(text);
        
    };


    return (
        <div className="h-80  2xl:w-1/5  xl:w-1/4  lg:w-1/3 w-80   relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div className="relative md:mx-4 mt-4 h-20    text-gray-700 bg-[#ebe1d8]  rounded-lg  ">
                <div className="absolute rounded-full border-[4px] border-white top-0 left-1/2 transform -translate-x-1/2 translate-y-5  ">
                    <img 
                        src={user.picture.large} 
                        alt={`${user.name.first} ${user.name.last}`} 
                        className='h-24 rounded-full  '  
                    />
                </div>
            </div> 
            <div className="md:mx-10 mx-4 mt-12 flex flex-col items-center text-center  ">    
                <p className="text-xl font-bold text-gray-600     dark:text-white  ">
                    {dataDisplayed}
                </p>
            </div> 
            <div className="md:mx-4 lg:mx-10 mx-4 flex  justify-between mb-2 mt-12">
                {userData.map((data, dataIndex) => (
                    <button 
                        key={dataIndex} 
                        onMouseOver={() => handleMouseOver(data.text)}
                        className={` bg-white text-3xl px-2 ${dataDisplayed === data.text ? 'text-[#f3854f] ' : 'text-gray-200  '}`}
                    >
                        {data.icon}
                    </button>
                ))}
            </div> 
        </div>
        
    );
};

export default Cards;