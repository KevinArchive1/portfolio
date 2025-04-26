export default function Project (props) {

    return(
        <div className=" flex flex-col items-center h-[500px] w-[400px] bg-gray-400 rounded-xl py-2 px-2 gap-[1rem] hover:scale-105 transition duration-300 ease-out">
            <div>
                <img className="h-[100%] w-[400px]" src={process.env.PUBLIC_URL + props.image} alt="" />
            </div>
            <div className="flex flex-col  items-center text-justify gap-[1rem] p-4">
                <h1 className="font-bold text-xl">
                    {props.title}
                </h1>
                <p className="text-xl">{props.description}</p>
                <button className="hover:bg-black hover:text-white bg-sky-200 p-1 rounded hover:scale-110 transition duration-300 ease-out">
                    <a href={props.link} target="_blank">Visit Website</a>
                </button>
            </div>
        </div>
    )
}