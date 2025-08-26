import React, { FC } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'   
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const Layout:FC = () => {
    const {notes} = useSelector((store:RootState)=>store.notes)

    const {id} = useParams()
    const note = notes.find((note)=>note.id === id)

    if(!note){
        return <Navigate to="/" />
    }

  return (
    
        <Outlet context={note} />
    
  )
} 

export default Layout