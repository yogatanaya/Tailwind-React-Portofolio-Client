import './App.css';
import Hero from './Components/Hero';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">

      {/* Hero Component */}
      <Hero/>

      {/* Product List */}
      <h3 className='text-4xl font-bold py-16'>Featured Products</h3>
      <div className='mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center'>
        <ProductList/>
      </div>

      {/* Shop Feed backs */}
      <h3 className='text-4xl font-bold py-8'>Leave us a Message</h3>
      <div className='mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center'>
        <div className='w-1/2'>
          <img src="/emailus.png" alt="emailus"/>
        </div>
        <div className='w-1/2 max-w-screen-sm'>
          <form className='bg-white rounded mt-5 mx-w-lg'>
            <div className='flex-wrap flex'>
              <label className='block text-gray-400 text-md font-bold mr-3' for='name'>Name</label>
              <input type="text" className='bg-gray-200 border-none rounded mt-2 py-2 px-4 focus:outline-none w-full'/>
            </div>
            <div className='flex-wrap flex mt-4'>
              <label className='block text-gray-400 text-md font-bold mr-3' for='name'>Email</label>
              <input type="text" className='bg-gray-200 border-none rounded mt-2 py-2 px-4 focus:outline-none w-full'/>
            </div>
            <div className='flex-wrap flex mt-4'>
              <label className='block text-gray-400 text-md font-bold mr-3' for='name'>Message</label>
              <textarea className='bg-gray-200 border-none rounded mt-2 py-2 px-4 focus:outline-none w-full' cols="5" rows="6"></textarea>
            </div>
            <div className='flex-wrap flex mt-5'>
              <button type="submit" className='rounded-full bg-black p-3 text-white w-1/5'>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
