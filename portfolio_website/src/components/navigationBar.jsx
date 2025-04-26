
export default function Nav() {
    const navItems = [
        {id: 1, label: "Home", href: '#top'},
        {id: 2, label: "About Me", href: '#About'},
        {id: 1, label: "Projects", href: '#Projects'},
        {id: 1, label: "Contact Me", href: '#Contacts'}
    ]

    return(
        <div className="flex fixed justify-center items-center h-[80px] w-full bg-gray-400  list-none shadow-2xl z-[10]">
            <div className="flex  w-[88%] justify-between items-center ">
                <div className="flex  items-center">
                    <img className="h-[50px] w-auto" src={process.env.PUBLIC_URL + "/Images/logo.png"} alt="" />
                </div>
                <div className="flex gap-6 items-center jusitfy-center  "> 
                    {navItems.map((i) => (
                        <li className="font-bold text-white text-lg hover:scale-125 transition duration-300 ease-out" key={i.id}>
                            <a href={i.href}>{i.label}</a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
