import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const CreatePage = () => {
//https://localhost:8000/api/patients

    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        
        try {
            const response = await fetch('http://localhost:8000/api/patients', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const patient = await response.json()
            console.log(patient)
            navigate('/patients')
        } catch (error) {
            console.log("Error!",error)
        }
    }

    /*const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const patientName = formData.get('name');
        const patientAge = formData.get('age');
        console.log(patientName);
        console.log(patientAge);*/

  return (
    <>
        <Navbar/>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className='p-8 w-full'>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"> Form to add patient</div>
                        <form onSubmit= {handleSubmit(onSubmit)}>
                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                {...register("name", {required: true}) }
                                placeholder='Patient Name'                               
                            />
                            {errors.name && <span className="text-red-500 underline">Please, fill all the fields</span>}

                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="number" 
                                {...register("age", {required: true})}
                                placeholder='Patient Age'                               
                            />
                            {errors.name && <span className="text-red-500 underline">Please, fill all the fields</span>}

                            <input 
                                className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="number" 
                                {...register("num_afi", {required: true})} 
                                placeholder='Patient affiliation number' 
                            />
                            {errors.name && <span className="text-red-500 underline">Please, fill all the fields</span>}

                            <textarea className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                {...register("address", {required: true})}
                                cols="30" 
                                rows="10"
                                placeholder='Patient Address'                          
                            ></textarea>
                            {errors.name && <span className="text-red-500 underline">Please, fill all the fields</span>}

                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                        </form>
                    </div>
                </div>
        </div>
    </>
  )
}
