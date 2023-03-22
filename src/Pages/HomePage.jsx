import * as React from 'react'

export default function (){
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => res.json()).then(res => setData(res.products))
    }, [])

    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto '>
                <div className='p-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {data.map((product, idx) => {
                            return (
                                <div key={idx} className="bg-white shadow-md hover:shadow-lg rounded-xl cursor-pointer">
                                    <img src={product.thumbnail} className="h-32 object-cover w-full" />
                                    <div className='px-4 py-2'>
                                        <div className='text-xs flex justify-between'>
                                            <div >Price: ₹ {product.price}</div>
                                            <div className='text-sm font-medium'>{product.brand}</div>
                                        </div>
                                        <div className='text-base font-semibold'>{product.title}</div>
                                        <div className='text-base font-normal'>{product.description}</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}