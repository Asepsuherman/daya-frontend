import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/customer');
        setCustomers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Pelanggan</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.name}>
            {customer.name} - {customer.level} - {customer.favorite_menu} - {customer.total_transaction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
