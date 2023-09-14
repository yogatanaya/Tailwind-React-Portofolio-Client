import Navbar from "./Navbar"

export default function Hero() {
    return (
        <>
        <section className='text-white ' style={{ 
            backgroundImage: 'linear-gradient(rgba(20,20,20,0.4),rgba(19,19,19,0.4)),url(https://source.unsplash.com/2rZq49uGxLk)',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '622px',
            backgroundSize: 'cover',
            position: 'relative',
            objectFit: 'cover'
        }}
        >
            <Navbar/>
            <div className='mx-auto max-w-screen-xl px-4 py-64 lg:flex lg:items-center'>
                <div className='mx-auto max-w-3xl text-center'>
                <h1 className='text-white font-bold text-4xl'>Coffee<span className='font-thin'>Store</span></h1>
                </div>
            </div>
        </section>
        </>
    ) 
}