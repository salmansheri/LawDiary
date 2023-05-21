import React from 'react'

const Header = () => {
  return (
    <div className="bg-myViolet flex flex-row text-white rounded-lg shadow-md justify-between items-center p-5">
        <div>

            <h2 className="font-light text-sm">Undated Cases</h2>
            <span className="text-2xl">pending 15</span>
            
        </div>
        <div>
        <h2 className="font-light text-sm">Today Hearing</h2>
            <span className="text-2xl">14</span>
        </div>
        <div>
        <h2 className="font-light text-sm">Tomorrow Hearing</h2>
            <span className="text-2xl">pending 15</span>
        </div>

    </div>
  )
}

export default Header