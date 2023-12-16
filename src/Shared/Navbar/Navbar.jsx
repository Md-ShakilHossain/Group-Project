import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
    <li><NavLink className={({ isActive, isPending }) =>
        `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
    } to='/'>Home</NavLink></li>

    <li><NavLink className={({ isActive, isPending }) =>
        `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
    } to='/login'>Login</NavLink></li>
    </>

    return (
        <div>
            <nav className="bg-gray-200 border border-b-black">
                <div className="flex items-center justify-between mx-auto p-4">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="true">

                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        }
                    >

                        <Dropdown.Item className="flex flex-col">{links}</Dropdown.Item>
                    </Dropdown>

                    <div className="hidden w-full lg:block md:w-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-4 mt-4 rounded-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            {links}
                        </ul>
                    </div>
                    

                </div>
            </nav>
        </div>
    );
};

export default Navbar;