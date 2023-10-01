import React, { useState } from 'react'
import pb from "lib/pocketbase.js";
import { useForm } from "react-hook-form"


export default function Auth() {
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    console.log(register('email'))

    async function login(data) {
        setLoading(true);
        try{
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
        } catch(e){
            alert(e)
        }
        setLoading(false);
    }
  
    return (
    <>
        {isLoading &&  <p>loading...</p>}
        <h1>Logged In: {pb.authStore.isValid.toString()}</h1>

        <form onSubmit={handleSubmit(login)}>
            <input type='text' placeholder='email' {...register("email")} />
            <input 
            type='password' 
            placeholder='password' 
            {...register("password")}
        />

            <button type='submit' disabled={isLoading}>{isLoading ? "Loading" : "Login"}</button>
        </form>
    </>
  )
}