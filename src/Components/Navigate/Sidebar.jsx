import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar({ activeMenu }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const menuItems = [
    { name: 'Dashboard', endpoint: '/', icon: 'asset/category-2.svg' },
    { name: 'Stock', endpoint: '/stock', icon: 'asset/battery-full.svg' },
    { name: 'Customers', endpoint: '/customers', icon: 'asset/profile-2user.svg' },
    { name: 'Restaurant', endpoint: '/restaurant', icon: 'asset/reserve.svg' },
    { name: 'Design', endpoint: '/design', icon: 'asset/mouse-square.svg' },
    { name: 'Report', endpoint: '/report', icon: 'asset/document-normal.svg' },
    { name: 'Role & Admin', endpoint: '/roleandadmin', icon: 'asset/user-square.svg' },
    { name: 'Settings', endpoint: '/settings', icon: 'asset/candle.svg' },
  ];

  const integratItems = [
    { name: 'Stock', endpoint: '/instock', icon: 'asset/shopping-cart.svg' },
    { name: 'Supply', endpoint: '/supply', icon: 'asset/truck.svg' },
  ]

  const navigate = useNavigate();

  return (
    <div className="w-[200px] h-screen fixed border border-b-0 border-l-0 border-t-0 border-r border-[#98949E]">
      <div className="flex flex-col justify-between h-full relative p-6 ">
        <div className="flex flex-col gap-6">
          <div className="">
            <img src="/asset/logo-square.svg" alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-2  text-[#98949E]">
              <h4 className="font-satoshi text-[10px]">Menu</h4>
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.endpoint}
                    className={`flex items-center font-quicksand font-bold text-sm py-2 ${activeMenu === item.endpoint ? 'text-[#5D5FEF]' : ''
                      }`}
                    onClick={() => {
                      navigate(item.endpoint);
                      setIsButtonClicked(false);
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={`${item.name} Icon`}
                      className={`mr-2 ${isButtonClicked || activeMenu === item.endpoint
                        ? 'text-[#5D5FEF]'
                        : ''
                        }`}
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </ul>

            <ul className="flex flex-col gap-2  text-[#98949E]">
              <h4 className="font-satoshi text-[10px]">Integration</h4>
              {integratItems.map((integ) => (
                <li key={integ.name}>
                  <Link
                    to={integ.endpoint}
                    className={`flex items-center font-quicksand font-bold text-sm py-2 ${activeMenu === integ.endpoint ? 'text-[#5D5FEF]' : ''
                      }`}
                    onClick={() => {
                      navigate(integ.endpoint);
                      setIsButtonClicked(false);
                    }}
                  >
                    <img
                      src={integ.icon}
                      alt={`${integ.name} Icon`}
                      className={`mr-2 ${isButtonClicked || activeMenu === integ.endpoint
                        ? 'text-[#5D5FEF]'
                        : ''
                        }`}
                    />
                    {integ.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex flex-col gap-6 p-6 border border-b-0 border-l-0 border-t border-r-0 border-[#98949E]">
          <div className="flex flex-row items-center gap-3">
            <img src="./asset/avatar.png" alt="Avatar-Icon" />
            <div className="flex flex-col ">
              <h3 className="font-quicksand text-sm font-semibold">Savannah N</h3>
              <p className="font-satoshi font-normal text-[10px] text-[#98949E]">Food Quality Manager</p>
            </div>
          </div>
          <bu className="bg-[#FEF5F6] rounded p-2 flex flex-row gap-2 items-center justify-center hover:bg-[#8F0A13] hover:bg-opacity-20">
            <img src="./asset/logout.svg" alt="Logout-Icon" />
            <h3 className="font-quicksand font-semibold text-xs text-[#8F0A13]">Logout</h3>
          </bu>
        </div>
      </div>
    </div>
  );
}
