import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Package1 = () => {
    const [adult, setAdult] = useState(1)
    const [child, setChild] = useState(0)
    const [total, setTotal] = useState(900)
    function subAdult(value) {
        if (value > 1) {
            setAdult(value - 1)
            setTotal(total - 900)
        }
    }
    function addAdult(value) {
        setAdult(value + 1)
        setTotal(total + 900)
    }
    function subChild(value) {
        if (value > 0) {
            setChild(value - 1)
            setTotal(total - 900)
        }
    }
    function addChild(value) {
        setChild(value + 1)
        setTotal(total + 900)
    }
    function addToCart() {
        const data = {
            id: "user_id",
            name: "Person_name",
            adult_qty: adult,
            child_qty: child,
            sub_total: total
        }
        console.log(data)
        setAdult(1)
        setChild(0)
        setTotal(900)
    }
    return (
        <>
            <section className='w-full lg:h-auto relative '>
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat z-0"
                    style={{
                        backgroundImage:
                            "url('/assets/images/tours/hero-banner-1.jpg')",
                    }}
                ></div>
                <div className="relative z-10 md:h-[300px] h-[400px] flex md:justify-end justify-center items-end">
                    <div className='rounded-t-lg p-3 bg-white md:mr-7'><Link to="/">Home </Link>/ <span className='text-[#F36727]'>3 Nights 4 days Dubai Tour Package</span></div>
                </div>
            </section>
            <section className='w-full bg-[#FAF5EE]'>
                <div className='container max-w-[1200px] md:px-6 px-4 mx-auto  py-4'>
                    <p className='font-semibold text-2xl'>3 Nights 4 days Dubai Tour Package</p>
                </div>
            </section>
            <section className='container max-w-[1200px] md:px-6 px-4 mx-auto  py-4'>
                <h5 className='text-xl font-semibold'>Available options</h5>
                <div className="overflow-x-auto">
                    <table className="hidden md:table border w-full border-collapse">
                        <thead>
                            <tr className="border bg-gray-100">
                                <th className="border py-3">Thumbnail</th>
                                <th className="border py-3">Adult quantity</th>
                                <th className="border py-3">Child quantity</th>
                                <th className="border py-3">Price Inc. 5% VAT</th>
                                <th className="border py-3">Subtotal</th>
                                <th className="border py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border text-center">
                                    <img
                                        src="/assets/images/tours/Pastel-Teal-Flower-Simple-Good-Time-Square-Pillow.webp"
                                        alt="Pastel-Teal-Flower-Simple-Good-Time-Square-Pillow"
                                        className="w-[200px] rounded-3xl mx-auto"
                                    />
                                </td>
                                <td className="border text-center">
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => subAdult(adult)}
                                    >
                                        -
                                    </button>{" "}
                                    {adult}{" "}
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => addAdult(adult)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td className="border text-center">
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => subChild(child)}
                                    >
                                        -
                                    </button>{" "}
                                    {child}{" "}
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => addChild(child)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td className="border text-center">&#x62f;.&#x625; 900 per person</td>
                                <td className="border text-center">&#x62f;.&#x625; {total}</td>
                                <td className="border text-center">
                                    <button
                                        className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-800 transition duration-300 ease-in-out"
                                        onClick={addToCart}
                                    >
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile / Tablet stacked view */}
                    <div className="md:hidden space-y-4">
                        <div className="border rounded-xl p-4 shadow-sm">
                            <div className="flex justify-center mb-3">
                                <img
                                    src="/assets/images/tours/Pastel-Teal-Flower-Simple-Good-Time-Square-Pillow.webp"
                                    alt="Pastel-Teal-Flower-Simple-Good-Time-Square-Pillow"
                                    className="w-[150px] rounded-2xl"
                                />
                            </div>

                            <div className="flex justify-between items-center py-2">
                                <span className="font-medium">Adult quantity</span>
                                <div>
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => subAdult(adult)}
                                    >
                                        -
                                    </button>{" "}
                                    {adult}{" "}
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => addAdult(adult)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2">
                                <span className="font-medium">Child quantity</span>
                                <div>
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => subChild(child)}
                                    >
                                        -
                                    </button>{" "}
                                    {child}{" "}
                                    <button
                                        className="px-3 py-[1px] rounded-lg bg-gray-300"
                                        onClick={() => addChild(child)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between py-2">
                                <span className="font-medium">Price Inc. 5% VAT</span>
                                <span>&#x62f;.&#x625; 900 per person</span>
                            </div>

                            <div className="flex justify-between py-2">
                                <span className="font-medium">Subtotal</span>
                                <span>&#x62f;.&#x625; {total}</span>
                            </div>

                            <div className="flex justify-end mt-3">
                                <button
                                    className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-800 transition duration-300 ease-in-out"
                                    onClick={addToCart}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Package1