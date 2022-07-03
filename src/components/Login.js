import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submit=(data)=>{
        console.log(data)
    }
    const navigate=useNavigate()
    return(
       
            <div className='row mt-3  w-100'>
                    
                <p className='text-center display-2 '>LOGIN</p>
            
                <div className='col-11 col-sm-8 col-md-6 mx-auto'>
                    <form onSubmit={handleSubmit(submit)}>
                    <div className='mb-3 '>
                      <label htmlFor="un">UserName</label>
                        <input type="text" id="un" className='form-control'{...register("username",{required:true})}/>
                       {errors.username?.type==='required' && <p className='text-danger'>*USERNAME REQUIRED</p>}
                    </div>
                    <div className='mb-3 '>
                      <label htmlFor="email" >Email</label>
                        <input type="email" id="email" className='form-control'{...register("email",{required:true})}/>
                        {errors.email?.type==='required' && <p className='text-danger'>*EMAIL ID REQUIRED</p>}
                       
                    </div>
                    
                    
                    <div className='mb-3 '>
                      <label htmlFor="password">Password</label>
                        <input type="password" id="password" className='form-control'{...register("password",{required:true})}/>
                        {errors.email?.type==='required' && <p className='text-danger'>*PASSWORD REQUIRED</p>}
                       
                    </div>
                    
                    
                

                    
                    <div className='row m-5'>
                    <button type="submit" className='bg-success text-white w-50'>Subimt</button>
                    <button type="button" className="  btn-danger  bg-danger  text-white w-50" aria-label="Close" onClick={()=>navigate("/")}>Cancel</button>
                    </div>
               
                </form>
                </div>
            </div>
       
    )
}
export default Login