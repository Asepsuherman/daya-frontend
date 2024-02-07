import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar({ activeMenu  }) {
    const menuItems = [
      { name: 'Dashboard', endpoint: '/' },
      { name: 'Stock', endpoint: '/stock' },
      { name: 'Customers', endpoint: '/customers' },
      { name: 'Restaurant', endpoint: '/restaurant' },
      { name: 'Design', endpoint: '/design' },
      { name: 'Report', endpoint: '/report' },
      { name: 'Role & Admin', endpoint: '/roleandadmin' },
      { name: 'Settings', endpoint: '/settings' },
      { name: 'Supply', endpoint: '/supply' },
    ];

    const navigate = useNavigate();
  
    return (
      <div className="min-w-52 p-6 border border-black">
        <h1 className="text-3xl font-bold underline">
          Square
        </h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.endpoint} className={`${activeMenu === item.endpoint || (activeMenu === '/' && item.endpoint === '') ? "text-red-500" : ""}`} onClick={() => navigate(item.endpoint)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  