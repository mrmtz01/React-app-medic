import React, {useEffect, useState} from 'react'
import { Navbar } from '../components/Navbar'

export const PatientsPage = () => {
  
  const [data, setData] = useState()

  useEffect(() => {
      const getAllPatients = async() => {
        try {
          const response = await fetch('http://localhost:8000/api/patients')
          const patients = await response.json()
          console.log(patients)
          setData(patients)
        } catch (error){
          console.log('Error!',error)
        }
      }
      getAllPatients()
  }, [])
  

  return (
    <>
        <Navbar/>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              {data.map(patient => (
            <div key={patient.id} className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Patient</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{patient.name}</a>
                <p className="mt-2 text-gray-500">{patient.address}</p>
            </div>
              ))}
            </div>
        </div>
    </>
  )
}

