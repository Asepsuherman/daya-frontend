import React, { useEffect } from 'react'
import Sidebar from '../Components/Navigate/Sidebar'
import MainContent from '../Components/Organisms/Content/MainContent'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Page({children}) {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const location = useLocation();

  useEffect(()=>{
    location.pathname === '/' ? setSelectedMenu('dashboard') : setSelectedMenu(location.pathname)

    console.log(location)
  },[location])

  return (
    <div className="flex flex-row ">
        <Sidebar activeMenu={selectedMenu}/>
        <MainContent>{children}</MainContent>
    </div>
  )
}
