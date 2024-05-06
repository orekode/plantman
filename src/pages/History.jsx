import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Loading } from "../components";

const History = () => {
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
          <span className='font-bold text-lg'>History</span>
        </div>

        <div className="grid-box-300 mt-3">
            {products.map( item => 
              <div key={item.id} className="card  relative scale-95">

                <div className="h-[200px] border rounded-2xl overflow-hidden p-6">
                  <img src={item.image} alt="" className="img-contain" />
                </div>

                <div className=" bottom-0 left-0 w-full p-1.5">
                  <button className='btn-outline'> View Diagnosis</button>
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

export default History