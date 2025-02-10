import {useEffect, useState } from "react"

 

function Navbar() {
    const [show, setShow] = useState(false)
    const [scroll,setScroll] = useState(false)


    const handleClick = () => {
        setShow(!show)
        //console.log(show)
    }
    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5){   
                setScroll(true)
            }else{
                setScroll(false)
            }
                
            });
        });   
        let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";
  return (
    <div className={`navbar fixed w-full transition-all  ${scrollActive}`}>
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="sm:text2xl text-xl font-bold">Home</h1>
                </div>
                <ul className={`flex lg:gap-12 md:static md:flex-row md:bg-transparent md:shadow-none md:w-auto md:h-auto md:translate-y-0 md:text-black md:p-0 md:m-0 md:transision-none gap-8 ${menuActive} top-1/2 fixed -translate-y-1/2 flex-col px-8 py-6 rounded shadow-slate-300 bg-sky-400 font-bold text-white transision-all `} >
                    <li className="flex items-center gap-3">
                        <i className="ri-home-2-line text-3xl md:hidden block"></i>
                        <a href="#" className="font-medium opacity-75">Beranda</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-information-2-line text-3xl md:hidden block"></i>
                        <a href="#" className="font-medium opacity-75">Tentang Kami</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-settings-3-line text-3xl md:hidden block"></i>
                        <a href="#" className="font-medium opacity-75">Layanan</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="ri-image-2-line text-3xl md:hidden block"></i>
                        <a href="#" className="font-medium opacity-75">Proyek</a>
                    </li>
                     
                </ul>
                <div className="social flex items-center gap-2"><a href="#" className="bg-sky-300 px-5 py-2 rounded-full text-white hover:bg-sky-500 transision-all">Social Media</a>
                <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                 </div>
            </div>
            
        </div>

       
    </div>
  )
}

export default Navbar
