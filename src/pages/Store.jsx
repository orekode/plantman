import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Loading } from "../components";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then( data => data.json())
      .then( data => {
        setProducts(data);
        setLoad(false);
      });
  }, []);

  return (
    <div className='p-6'>
      <Loading load={load} />
        <div className="top flex gap-1 mb-3">
          <div className="icon rounded-full h-[30px] w-[30px]  text-xs flex-center bg-white bg-opacity0 border border-gray-400 text-gray-500">
            <ChevronLeft />
          </div>
          <span className='font-bold text-lg'>Store</span>
        </div>

        <div className="search-box flex items-center gap-1.5 h-[40px]">
            <input type="text" className="flex-grow border h-full rounded-xl px-3" style={{width: 'calc(100% - 45px)'}}/>
            <div className="icon rounded-full border h-full w-[40px] flex-center">
                <ShoppingBag />
            </div>

        </div>

        <div className="grid-box mt-3">
            {products.map( item => 
              <div key={item.id} className="card  relative scale-95">

                <div className="h-[200px] border rounded-2xl overflow-hidden p-6">
                  <img src={item.image} alt="" className="img-contain" />
                </div>

                <div className=" bottom-0 left-0 w-full p-1.5">
                  <div className="bg-white p-0.5 rounded-2xl">
                    <div className="name text-sm font-semibold leading-tight">{item.title}</div>
                    <div className="price w-full text-left mt-0.5"><span className="text-xs">Ghc</span> {item.price}</div>
                  </div>
                </div>

                <div className="cart absolute top-0 right-0 p-0.5">
                  <div className="icon rounded-full h-[40px] w-[40px] flex-center bg-white bg-opacity0 border-2 border-green-600 text-green-600">
                    <ShoppingBag />
                  </div>
                </div>
              </div>
            )}
        </div>

        <div className="pagination flex gap-1 justify-center">
          <div className="icon rounded-full h-[30px] w-[30px]  text-xs flex-center bg-white bg-opacity0 border border-gray-400 text-gray-500">
            <ChevronLeft />
          </div>
          {Array.from({length: 4}, (_, index) => 
            <div className="icon rounded-full h-[30px] w-[30px] text-xs flex-center bg-white bg-opacity0 border border-gray-400 text-gray-500">
              {index}
            </div>
          )}
          <div className="icon rounded-full h-[30px] w-[30px] text-xs flex-center bg-white bg-opacity0 border border-gray-400 text-gray-500">
            <ChevronRight />
          </div>
        </div>
    </div>
  )
}

export default Store