import {useState, useEffect } from "react"

export default function Main () {
    const titles = ["Developer", "Designer", "Programmer"];
    const colors = ["text-blue-500", "text-blue-600", "text-blue-700"]
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval)
    }, []);
    return(
        <div className="flex justify-evenly items-center h-[600px] w-[100%] animate-fade-in">
            <div className="flex flex-col justify-center items-center text-[4rem] font-bold w-[25%]  justify-center">
                <h1>Hi I'm </h1>
                <h1 className="text-blue-600">Harold</h1>
            </div>
            <div className="w-[35%]">
            <img  className="h-auto border-[10px] border-black hover:border-blue-600 rounded-full transition duration-300 ease-out" src={process.env.PUBLIC_URL + "/Images/profile.JPG"} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-[4rem] font-bold  w-[25%] ">
                <h1> I'm a </h1>
                <h1 className={colors[Index]}>{titles[Index]}</h1>
            </div>
        </div>
    )
}

