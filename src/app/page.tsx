import Header from "@/components/Header";
import Dropdown from "@/components/navbar/Dropdown";
import Link from "next/link";



export default function Home() {
  const currentUser  = false; 
  return (
    <div className="">

     <Dropdown currentUser={currentUser} />
      
      <Header />
      
     
    </div>
  )
}
