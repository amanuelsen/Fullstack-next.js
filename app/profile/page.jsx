"use client"
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import React from 'react'
 
import { useRouter } from 'next/router'

import Profile from '@components/Profile'

const Myprofile = () => {
    const {data:session}=useSession()
    const [post, setpost] = useState(second)
    const router= useRouter()
    useEffect(()=>{
        const  fetchpost= async ()=> {
          const response= await fetch(`/api/users/${session}`)
          const data= await response.json()
          setpost(data)
        }
       if(session?.user.id)  fetchpost()
          }, [])
    const handleedit=(post)=>{
        router.push(`/update-propmt?id=${post._id}`)

    }
    const handledelete=async (post)=>{
        const hascomfirmed=confirm("are you sure you want to delete this propmt")
        if(hascomfirmed){
            try {
                await  fetch(`/api/prompts/${post._id.toString()}`, {
                    method:"DELETE",


                })
                const fiflteredpost= post.filer((p)=> p._id !== post._id )
                setpost(fiflteredpost)
            } catch (error) {
                console.log(error)
                
            }
        }


    }

  return (
    <div>
        <Profile name={"my"} desc="welcome to your personlized profile page" data={post} handleedit={handleedit} handledelete={handledelete}/>
      
    </div>
  )
}

export default Myprofile;
