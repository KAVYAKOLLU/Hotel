import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
function Register(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submit=(data)=>{
        console.log(data)
    }
    const navigate=useNavigate()
    return(
       
            <div className='row mt-3 bg-secondary'>
                    
                <p className='text-center display-2 text-white'>Booking Form</p>
            
                <div className='col-11 col-sm-8 col-md-6 mx-auto'>
                    <form onSubmit={handleSubmit(submit)}>
                    <div className='mb-3 '>
                      <label htmlFor="un" className='text-white'>UserName</label>
                        <input type="text" id="un" className='form-control'{...register("username",{required:true})}/>
                       {errors.username?.type==='required' && <p className='text-danger'>*USERNAME REQUIRED</p>}
                    </div>
                    <div className='mb-3 '>
                      <label htmlFor="email" className='text-white'>Email</label>
                        <input type="email" id="email" className='form-control'{...register("email",{required:true})}/>
                        {errors.email?.type==='required' && <p className='text-danger'>*PASSWORD REQUIRED</p>}
                       
                    </div>
                    
                    <div className='mb-3 '>
                      <label htmlFor="mb" className='text-white'>Mobile Number</label>
                        <input type="number"  id="mb" className='form-control'{...register("mb" ,{minLength:9})}/>
                        {errors.mb?.type==='required' && <p className='text-danger'>*NINE NUMBERS MUST  </p>}
                    </div>
                   
                    <div className='mb-3 '>
                      <label htmlFor="adult" className='text-white'>Number of Rooms</label>
                        <input type="number" min="1" id="adult" className='form-control'{...register("adult")}/>
                    </div>
                    
                    <div className='mb-3 '>
                      <label htmlFor="feedback" className='text-white'>Any Questions</label>
                      <textarea id="feedback" row="5" className='form-control' {...register("feedback")}></textarea>
                    </div>
                    
                    
                

                    
                    <div className='row'>
                    <button type="submit" className='bg-success text-white w-50'>Subimt</button>
                    <button type="button" className="  btn-danger  bg-danger  text-white w-50" aria-label="Close" onClick={()=>navigate("/")}>Cancel</button>
                    </div>
               
                </form>
                </div>
            </div>
       
    )
}
export default Register