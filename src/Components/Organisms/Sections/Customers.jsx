import React, { useEffect, useState } from "react";
import axios from "axios";
import LevelBadge from "../Atoms/LevelBadge";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchCustomers();
  }, []);

  // console.log(customers)

  return (
    <section className="flex flex-col gap-4 absolute left-[200px] top-0 p-6">
      <header className="flex flex-row items-end justify-between relative">
        <div className="w-full">
          <h1 className="font-quicksand font-black text-[24px] leading-9">Customer</h1>
          <p className="font-satoshi mt-1 text-sm leading-7 text-[#98949E]">You can manage and organize your customer and other things here</p>
          <hr className="w-full border-b border-[#D1D0D366] mt-4" />
        </div>
        <div className="absolute bottom-0 right-0">
          <ul className="flex flex-row gap-2 w-[608px] text-center font-quicksand font-bold text-sm">
            <li className=" w-[194px] px-6 py-3 relative">
              <button>
                <h3 className="text-[#5D5FEF]">Customer</h3>
                <hr className="w-full mt-3 absolute left-0 bottom-0 h-[2px] border-[2px] border-[#5D5FEF]" />
              </button>
            </li>
            <li className=" w-[194px] px-6 pt-3">
              <button>
                <h3>Promo</h3>
              </button>
            </li>
            <li className=" w-[194px] px-6 pt-3 relative">
              <button>
                <h3>Voucher</h3>
              </button>
            </li>
          </ul>
        </div>
      </header>


      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-3 gap-4 relative w-[949px] h-[167px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/asset/Bg-Cust.png')" }}>
            <div className="flex flex-col gap-1 text-[#ffffff] w-80">
              <h1 className="font-quicksand font-bold text-xl leading-[30px]">Customer</h1>
              <p className="font-satoshi font-medium leading-6 text-xs">On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</p>
            </div>
            <div>
              <ul className="flex flex-row justify-between font-quicksand text-sm font-semibold">
                <li className="">
                  <button className="flex flex-row items-center bg-[#ffffff] bg-opacity-20 hover:bg-opacity-30 gap-3 px-4 py-3 rounded-lg text-[#ffffff] text-sm leading-[21px]">
                    <img src="./asset/plus.svg" alt="" />
                    Add New Customer
                  </button>
                </li>
                <li className="">
                  <div className="text-[#ffffff] flex flex-row justify-between bg-[#ffffff] rounded-lg w-[421px] pl-4 pr-1 py-1">
                    <div className="flex flex-row gap-4 items-center">
                      <img src="./asset/search-normal.svg" alt="" />
                      <input type="text" placeholder="Search Customer" className="focus:border-[1px] pl-2 rounded-lg w-full focus:border-[#98949E] text-[#98949E] font-medium focus:outline-none" />
                    </div>
                    <button className="px-4 rounded-lg py-2 bg-[#5D5FEF] hover:bg-opacity-80">
                      Search
                    </button>
                  </div>
                </li>
                <li className="">
                  <button className="flex flex-row items-center bg-[#ffffff] bg-opacity-20 hover:bg-opacity-30 gap-3 px-4 py-3 rounded-lg text-[#ffffff]">
                    <img src="./asset/filter.svg" alt="" />
                    Filter
                  </button>
                </li>
                <li className="">
                  <button className="flex flex-row items-center bg-[#ffffff] bg-opacity-20 hover:bg-opacity-30 gap-3 px-4 py-3 rounded-lg text-[#ffffff]">
                    <img src="./asset/plus.svg" alt="" />
                    Refresh
                  </button>
                </li>
                <li className="">
                  <button className="flex flex-row items-center bg-[#ffffff] bg-opacity-20 hover:bg-opacity-30 gap-3 px-4 py-[13.5px] rounded-lg text-[#ffffff]">
                    <img src="./asset/printer.svg" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Tabel */}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-[#98949E] bg-[#F6FEF9] rounded-lg">
              <tr className="">
                <th scope="col" className="font-quicksand font-medium text-sm leading-[21px] px-[10px] w-[190px] py-3 ">
                  <div className="flex flex-row justify-between">
                    Customer Name
                    <img src="./asset/frame.svg" alt="" />
                  </div>
                </th>
                <th scope="col" className="font-quicksand font-medium text-sm leading-[21px] px-[10px] w-[190px] py-3 ">
                  <div className="flex flex-row justify-between">
                    Level
                    <img src="./asset/frame.svg" alt="" />
                  </div>
                </th>
                <th scope="col" className="font-quicksand font-medium text-sm leading-[21px] px-[10px] w-[190px] py-3 ">
                  <div className="flex flex-row justify-between">
                    Favorite Menu
                    <img src="./asset/frame.svg" alt="" />
                  </div>
                </th>
                <th scope="col" className="font-quicksand font-medium text-sm leading-[21px] px-[10px] w-[190px] py-3 ">
                  <div className="flex flex-row justify-between">
                    Total Transaction
                    <img src="./asset/frame.svg" alt="" />
                  </div>
                </th>
                <th scope="col" className="font-quicksand font-medium text-sm leading-[21px] px-[10px] w-[190px] py-3 ">
                  <div className="flex flex-row justify-between">
                    Action
                    <img src="./asset/frame.svg" alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="bg-white ">
                  <th
                    scope="row"
                    className="px-[10px] py-3 font-semibold text-[#110D17] text-sm font-quicksand"
                  >
                    {customer.name}
                  </th>
                  <td className="px-[10px] py-3 "><LevelBadge level={customer.level} /></td>
                  <td className="px-[10px] py-3 font-semibold text-[#110D17] text-sm font-quicksand">{customer.favorite_menu}</td>
                  <td className="px-[10px] py-3 font-semibold text-[#110D17] text-sm font-quicksand">{customer.total_transaction}</td>
                  <td className="px-[10px] py-3 font-semibold text-[#110D17] text-sm font-quicksand flex flex-row gap-1 justify-between">
                    <button className="flex flow-row items-center gap-2 bg-[#FAFAFA] rounded-lg py-1 px-3 font-semibold text-sm">
                      <img src="./asset/shield-search.svg" alt="" />
                      Detail
                    </button>
                    <button className="flex flow-row items-center gap-2 bg-[#FAFAFA] rounded-lg py-1 px-3">
                      <img src="./asset/edit.svg" alt="" />
                    </button>
                    <button className="flex flow-row items-center gap-2 bg-[#FAFAFA] rounded-lg py-1 px-3">
                      <img src="./asset/trash.svg" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            {/* Pagination */}
            <div className="flex flex-row justify-between items-center rounded-lg bg-[#FAFAFA] px-3 py-2 font-quicksand">
              <h3 className="font-semibold text-base text-[#98949E]">Showing 10 Data Customers</h3>
              <ul className="flex flex-row items-center text-sm text-[#6D6D6D] font-semibold">
                <button className="px-4 py-2 text-[#110D17] shadow-pag bg-[#ffffff] rounded-sm">1</button>
                <button className="px-4 py-2">2</button>
                <button className="px-4 py-2">3</button>
                <button className="px-4 py-2">...</button>
                <button className="px-4 py-2">38</button>
                <button className="px-4 py-2 flex flex-row gap-2 items-center">
                  <h3>Next</h3>
                  <img src="./asset/arrow.svg" alt="" />
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4  rounded-lg">
          <div className="flex flex-col justify-between bg-cover bg-center h-[260px] w-[227px] rounded-lg p-4" style={{ backgroundImage: "url('/asset/square-right.svg')" }}>
            <h1 className="font-quicksand font-semibold leading-[30px] text-xl text-[#ffffff] w-40">See analytics of the Customer Clearly</h1>
            <button className="w-fit font-quicksand font-semibold leading-[21px] text-sm text-[#ffffff] px-4 py-2 rounded-lg bg-[#ffffff] bg-opacity-20 hover:bg-opacity-50">
              See Analytics
            </button>
          </div>

          <div className="rounded-lg bg-[#FAFAFA] flex flex-col  w-[227px]">
            <div className="p-4">
              <div className="flex flex-col gap-3">
                <h1 className="font-quicksand text-2xl">Top Menu <br /><strong className="font-bold text-[#F17300]">This Week</strong></h1>
                <p className="font-satoshi text-xs text-[#98949E]">10 - 12 Agustus 2023</p>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="p-[10px] shadow-shadow-right rounded-lg relative">
                  <h1 className="font-quicksand font-bold text-sm">Nasi Goreng Jamur Special Resto Pak Min</h1>
                  <img src="./asset/One-square.svg" alt="" className="absolute top-[-12px] right-0" />
                </li>
                <li className="p-[10px] font-quicksand font-semibold text-sm text-[#98949E]">2. Tongseng Sapi Gurih</li>
                <li className="p-[10px] font-quicksand font-semibold text-sm text-[#98949E]">3. Nasi Gudeg Telur Ceker</li>
                <li className="p-[10px] font-quicksand font-semibold text-sm text-[#98949E]">4. Nasi Ayam serundeng</li>
                <li className="p-[10px] font-quicksand font-semibold text-sm text-[#98949E]">5. Nasi Goreng Seafood</li>
              </ul>
            </div>
            <div>
              <img src="./asset/graph.svg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
