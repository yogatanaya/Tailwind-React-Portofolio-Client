export default function Navbar() {
    return (<>
        <nav>
            <ul className="flex lg:items-center mx-auto max-w-screen-xl py-6 justify-center">
                <li className="mr-6">
                    <a href="#!" className="text-white font-normal transition duration-150 border-b-2 border-transparent hover:border-gray-100">Home</a>
                </li>
                <li className="mr-6">
                    <a href="#!" className="text-white font-normal transition duration-150 border-b-2 border-transparent hover:border-gray-100">Products</a>
                </li>
                <li className="mr-6">
                    <a href="#!" className="text-white font-normal transition duration-150 border-b-2 border-transparent hover:border-gray-100">Cart</a>
                </li>
            </ul>
        </nav>
    </>)
}