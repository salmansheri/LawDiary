import React from 'react'; 

interface SearchProps {
    searchText?: string; 
    setSearchText?: React.SetStateAction<string>; 

}

const Search:React.FC<SearchProps> = ({
    searchText,
    setSearchText
}) => {
  return (
    <input 
        placeholder="Search..."
        className="mb-5 p-2 w-[30%] border border-myViolet focus:outline-none focus:outline-myViolet"
        // @ts-ignore
        onChange={(e) =>  setSearchText(e.target.value)}
        value={searchText}
    />
  )
}

export default Search