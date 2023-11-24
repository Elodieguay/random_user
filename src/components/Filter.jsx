import React from 'react'

const Filter = ({setSelectedGender, setOrderByBirth}) => {
    
    const changeGender = (event) =>{
        setSelectedGender(event.target.value)
        console.log("setSelectedGender", setSelectedGender);
    }

    const changeOrderByBirth = (event) =>{
        setOrderByBirth(event.target.value)
    }

  return (
    <div className=" md:mx-32 max-md:px-4">
        <div className="flex items-center justify-between mt-4">
            <p className="font-medium">
                Filters
            </p>
	    </div>

	    <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-2 mt-4  justify-items-center">
                <select 
                className="px-3 py-2 md:w-full w-4/5  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                onChange={changeGender}
                >
                    <option value="">Gender</option>
                    <option value="female">woman</option>
                    <option value="male">man</option>
                </select>
                <select 
                className="px-3 py-2 md:w-full w-4/5 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                onChange={changeOrderByBirth}
                >
                    <option value="">Order by</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </div>
	    </div>
    </div>
  )
}

export default Filter