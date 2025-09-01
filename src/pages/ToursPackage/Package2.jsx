import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Package2 = () => {
    const [packageName, setPackageName] = useState("");
    const [pacDate, setPacDate] = useState("");
    const [packageTime, setPacTime] = useState("");
    const [adultQty, setAdultQty] = useState(1);
    const [childQty, setChildQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    const packagePrices = {
        "Iconic Tour 12 min": 710,
        "Palm Tour 17 min": 945,
        "Vision Tour 22 min": 1290,
        "Grand Tour 30 min": 1770,
    };

    const time = [
        "11:30 - 12:30 AM",
        "12:45 - 01:45 PM",
        "02:00 - 03:00 PM",
        "03:15 - 04:15 PM",
    ];

    const handlePackageChange = (pkg) => {
        setPackageName(pkg);
        setPrice(packagePrices[pkg] || 0);
    };

    const handleTime = (tm) => {
        setPacTime(tm);
    };

    // ✅ Calculate subtotal whenever price, adultQty, or childQty changes
    useEffect(() => {
        const sub_Total = (adultQty + childQty) * price;
        setSubTotal(sub_Total);
    }, [adultQty, childQty, price]);

    const addToCart = () => {
        const data = [
            {
                Package: packageName,
                Date: pacDate,
                Time: packageTime,
                "Adult Qty": adultQty,
                "Child Qty": childQty,
                Subtotal: subTotal,
            },
        ];
        console.log(data);

        // reset after adding to cart
        setPackageName("");
        setPacDate("");
        setPacTime("");
        setAdultQty(1);
        setChildQty(0);
        setPrice(0);
        setSubTotal(0);
    };

    return (
        <>
            {/* Hero section */}
            <section className="w-full lg:h-auto relative ">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{
                        backgroundImage: "url('/assets/images/tours/istockphoto.jpg')",
                    }}
                ></div>
                <div className="relative z-10 md:h-[300px] h-[400px] flex md:justify-end justify-center items-end">
                    <div className="rounded-t-lg p-3 bg-white md:mr-7">
                        <Link to="/">Home </Link>/{" "}
                        <span className="text-[#F36727]">Helicopter View</span>
                    </div>
                </div>
            </section>

            {/* Title */}
            <section className="w-full bg-[#FAF5EE]">
                <div className="container max-w-[1200px] md:px-6 px-4 mx-auto  py-4">
                    <p className="font-semibold text-2xl">Helicopter tour package</p>
                </div>
            </section>

            {/* Packages table */}
            <section className="container max-w-[1200px] md:px-6 px-4 mx-auto  py-4">
                <h5 className="text-xl font-semibold mb-6">Available Options:</h5>
                <table className="table-fixed border w-full border-collapse mb-6">
                    <thead>
                        <tr className="border bg-gray-100 text-[#F36727]">
                            <th className="border py-3">PACKAGES</th>
                            <th className="border py-3 " colSpan={2}>
                                PUBLISHED RATE
                            </th>
                            <th className="border py-3">PAYABLE TO HELIDUBAI</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border  py-3">Iconic Tour 12 min</td>
                            <td className="border py-3">AED 710</td>
                            <td className="border py-3">Per Person</td>
                            <td className="border py-3">AED 553.8</td>
                        </tr>
                        <tr>
                            <td className="border  py-3">Palm Tour 17 min</td>
                            <td className="border py-3">AED 945</td>
                            <td className="border py-3">Per Person</td>
                            <td className="border py-3">AED 737.1</td>
                        </tr>
                        <tr>
                            <td className="border  py-3">Vision Tour 22 min</td>
                            <td className="border py-3">AED 1,290</td>
                            <td className="border py-3">Per Person</td>
                            <td className="border py-3">AED 1,013.2</td>
                        </tr>
                        <tr>
                            <td className="border  py-3">Grand Tour 30 min</td>
                            <td className="border py-3">AED 1,770</td>
                            <td className="border py-3">Per Person</td>
                            <td className="border py-3">AED 1,380.6</td>
                        </tr>
                    </tbody>
                </table>
                <p className="font-semibold mb-4">From Above packages, book the tour by choosing the suitable packages.</p>
                {/* Booking table */}
                <table className="hidden lg:table border w-full border-collapse">
                    <thead>
                        <tr className="border bg-gray-100 text-[#F36727]">
                            <th className="border py-3">PACKAGES</th>
                            <th className="border py-3">Date</th>
                            <th className="border py-3">Time</th>
                            <th className="border py-3">Adult Qty</th>
                            <th className="border py-3">Child Qty</th>
                            <th className="border py-3">Price</th>
                            <th className="border py-3">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            {/* Package Dropdown */}
                            <td className="py-3 border">
                                <select
                                    onChange={(e) => handlePackageChange(e.target.value)}
                                    value={packageName}
                                    className="p-2 border rounded"
                                >
                                    <option value="">Select packages</option>
                                    {Object.keys(packagePrices).map((pkg) => (
                                        <option key={pkg} value={pkg}>
                                            {pkg}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            {/* Date */}
                            <td className="py-3 border">
                                <input
                                    type="date"
                                    className="p-2 border rounded"
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setPacDate(e.target.value)}
                                    value={pacDate}
                                />
                            </td>

                            {/* Time */}
                            <td className="py-3 border">
                                <select
                                    onChange={(e) => handleTime(e.target.value)}
                                    value={packageTime}
                                    className="p-2 border rounded"
                                >
                                    <option value="">Select time</option>
                                    {time.map((item, idx) => (
                                        <option key={idx + 1} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            {/* Adult Qty */}
                            <td className="py-3 border space-x-2">
                                <button
                                    className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                    onClick={() => setAdultQty((q) => Math.max(1, q - 1))}
                                >
                                    -
                                </button>
                                <span>{adultQty}</span>
                                <button
                                    className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                    onClick={() => setAdultQty((q) => q + 1)}
                                >
                                    +
                                </button>
                            </td>

                            {/* Child Qty */}
                            <td className="py-3 border space-x-2">
                                <button
                                    className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                    onClick={() => setChildQty((q) => Math.max(0, q - 1))}
                                >
                                    -
                                </button>
                                <span>{childQty}</span>
                                <button
                                    className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                    onClick={() => setChildQty((q) => q + 1)}
                                >
                                    +
                                </button>
                            </td>

                            {/* Price */}
                            <td className="py-3 border">
                                {price ? `AED ${price}` : "-"}
                            </td>

                            {/* Subtotal */}
                            <td className="py-3 border">
                                {subTotal > 0 ? `AED ${subTotal.toFixed(2)}` : "-"}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="lg:hidden p-4  bg-white rounded-xl shadow-md space-y-4">
                    {/* Package Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-[#F36727] mb-1">
                            Package
                        </label>
                        <select
                            onChange={(e) => handlePackageChange(e.target.value)}
                            value={packageName}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select package</option>
                            {Object.keys(packagePrices).map((pkg) => (
                                <option key={pkg} value={pkg}>
                                    {pkg}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-[#F36727] mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            className="w-full p-2 border rounded"
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setPacDate(e.target.value)}
                            value={pacDate}
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block text-sm font-medium text-[#F36727] mb-1">
                            Time
                        </label>
                        <select
                            onChange={(e) => handleTime(e.target.value)}
                            value={packageTime}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select time</option>
                            {time.map((item, idx) => (
                                <option key={idx} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Adult Qty */}
                    <div>
                        <label className="block text-sm font-medium text-[#F36727] mb-1">
                            Adults
                        </label>
                        <div className="flex items-center space-x-4">
                            <button
                                className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                onClick={() => setAdultQty((q) => Math.max(1, q - 1))}
                            >
                                -
                            </button>
                            <span>{adultQty}</span>
                            <button
                                className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                onClick={() => setAdultQty((q) => q + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Child Qty */}
                    <div>
                        <label className="block text-sm font-medium text-[#F36727] mb-1">
                            Children
                        </label>
                        <div className="flex items-center space-x-4">
                            <button
                                className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                onClick={() => setChildQty((q) => Math.max(0, q - 1))}
                            >
                                -
                            </button>
                            <span>{childQty}</span>
                            <button
                                className="h-8 w-8 font-bold text-xl rounded-full bg-gray-200"
                                onClick={() => setChildQty((q) => q + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-center border-t pt-3">
                        <span className="font-medium text-[#F36727]">Price:</span>
                        <span>{price ? `AED ${price}` : "-"}</span>
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between items-center border-t pt-3">
                        <span className="font-medium text-[#F36727]">Subtotal:</span>
                        <span>{subTotal > 0 ? `AED ${subTotal.toFixed(2)}` : "-"}</span>
                    </div>
                </div>


                {/* Add to cart button */}
                <button
                    className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-800 transition duration-300 ease-in-out mt-4"
                    onClick={addToCart}
                >
                    Add to cart
                </button>
            </section>
        </>
    );
};

export default Package2;
