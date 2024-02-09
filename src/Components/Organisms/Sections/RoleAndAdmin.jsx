import React from 'react'
import UnderConstruction from './UnderConstruction'

export default function RoleAndAdmin() {
  return (
    <div className="flex flex-col gap-4 absolute w-full -z-50 pl-[200px] h-screen items-center justify-center">
      <h1 className="font-quicksand text-2xl font-black text-gray-800 mb-2">Role & Admin</h1>
      <div className="border border-violet-700">
        <UnderConstruction />
      </div>
    </div>
  )
}
