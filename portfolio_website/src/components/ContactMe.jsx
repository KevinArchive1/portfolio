export default function ContactMe () {

    return(
        <div className=" flex justify-around items-center h-[500px] w-full bg-gray-400">
            <div className="">
                <img className="h-[250px]" src={process.env.PUBLIC_URL + "/Images/logo.png"} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-auto text-[2rem] gap-[2rem] border p-5 rounded-[2rem] bg-sky-400 shadow-lg hover:shadow-2xl hover:bg-black hover:text-white hover:scale-110 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-[1rem] font-bold">
                    <h1>sazushi384@gmail.com</h1>
                    <h1>(123) 456-7890</h1>
                    <h1>Sariaya, Quezon</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1>Follow me on:</h1>
                    <div className="flex gap-[1rem]  ">
                        <a href="" className="hover:scale-110 ">LinkedIn</a>
                        <a href="" className="hover:scale-110 ">Twitter</a>
                        <a href="" className="hover:scale-110 ">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}