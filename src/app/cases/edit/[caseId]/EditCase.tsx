'use client'; 

import Button from '@/components/Button';
import axios from 'axios';
import React, { useState, useCallback} from 'react'; 
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; 


interface EditCaseProps {
    courtCase: Record<string, any> | null
}

const EditCase: React.FC<EditCaseProps> = ({
    courtCase
}) => {
    const router = useRouter(); 
    const [registerNumber, setRegisterNumber] = useState(courtCase?.regno);
    const [date,setDate] = useState(courtCase?.date); 
    const [hearingDate, setHearingDate] = useState(courtCase?.hearingDate)
    const [cnrNumber, setCnrNumber] = useState(courtCase?.cnrNo); 
    const [clientName, setClientName] = useState(courtCase?.clientName); 
    const [caseName, setCaseName] = useState(courtCase?.caseName); 
    const [courtName, setCourtName] = useState(courtCase?.courtName); 
    const [courtPlace, setCourtPlace] = useState(courtCase?.courtPlace); 
    const [oppositeParty, setOppositeParty] = useState(courtCase?.oppositeParty); 
    const [oppositeAdvocate, setOppositeAdvocate] = useState(courtCase?.oppositeAdvocate); 
    const [description, setDescription] = useState(courtCase?.description)

    const handleUpdate = useCallback(() => {
        axios.patch(`/api/cases/${courtCase?.id}`, {
            registerNumber,
            cnrNumber,
            caseName,
            courtName,
            courtPlace,
            oppositeAdvocate,
            oppositeParty,
            description,
            date,
            hearingDate,
            clientName,

        }).then(() => {
            toast.success("Updated Successfully"); 
            router.push("/cases")
        })
        .catch((error) => {
            toast.error("Something Went Wrong"); 
        })
        

    }, [
        registerNumber,
            cnrNumber,
            caseName,
            courtName,
            courtPlace,
            oppositeAdvocate,
            oppositeParty,
            description,
            date,
            hearingDate,
            clientName,
            courtCase?.id,
            router,

    ]); 
    
  return (
    <section>
        <div className="my-10">
            <div>
                <h1 className="text-3xl font-bold my-3">Edit Case</h1>
            </div>
            <div>
                <label>Register Number</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='number' 
                    value={registerNumber}
                    onChange={(e) => setRegisterNumber(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Date</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='date' 
                    value={date}
                    onChange={(e) => setDate(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Hearing Date</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='date' 
                    value={hearingDate}
                    onChange={(e) => setHearingDate(e.target.value) }
                    
                />
            </div>
            <div>
                <label>CNR No</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='number' 
                    value={cnrNumber}
                    onChange={(e) => setCnrNumber(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Client Name</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Case Name</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Court Name</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={courtName}
                    onChange={(e) => setCourtName(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Court Place</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={courtPlace}
                    onChange={(e) => setCourtPlace(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Opposite Party</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={oppositeParty}
                    onChange={(e) => setOppositeParty(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Opposite Advocate</label>
                <input className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"
                    type='text' 
                    value={oppositeAdvocate}
                    onChange={(e) => setOppositeAdvocate(e.target.value) }
                    
                />
            </div>
            <div>
                <label>Case Description</label>
                <textarea
 className="w-full p-2 border border-myViolet focus:outline-myViolet my-2"                   
                    value={description}
                    onChange={(e) => setDescription(e.target.value) }
                    
                />
            </div>
            <div>
                <Button label='Edit' onClick={handleUpdate} />
            </div>
            
        </div>
    </section>
  )
}

export default EditCase