export default function AboutMe () {

    return(
        <div className="flex justify-around items-center h-[600px] bg-gray-600 animate-fade-in">
            <div className="flex flex-col justify-center w-[600px] bg-white text-[1.5rem] rounded-xl px-2 py-2 gap-[2rem]">
                <h1>Hi, my name is <span className="text-blue-600 font-bold ">Harold V. Veleña</span>, a BSIT student that loves to learn and explore</h1>
                <h1>I am the jack of all trades in  various programming languages, though i haven't mastered any (yet)</h1>
                <h1>I love to study various programming languages and creating ideas into reality</h1>
                <h1>I'm currently looking for ways to gain more knowledge and collaborate on real-life projects</h1>
            </div>
            <div className="hover:rotate-x-6 hover:rotate-y-6 rounded-[1rem] shadow-3lg overflow-hidden bg-blue-300 transition duration-500 ease-in-out">
                <img className="h-[500px]" src={process.env.PUBLIC_URL + "/Images/me.png"} alt="" />
            </div>

        </div>
    )
}