import React, { FC } from 'react'
import { Typography } from '@mui/material'
import PageContainer from '../../styled/pageContainer'
import Form from '../../components/form'
import { NoteData } from '../../types'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/slices/noteSlice'
import { useNavigate } from 'react-router-dom'


const Create:FC = () => {

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleSubmit = (data:NoteData) => {
    dispatch(addNote(data))
    navigate('/')
  }

  return (
    <div>
      <PageContainer>
      <Typography variant="h5">Not Oluştur</Typography>
      <Form handleSubmit={handleSubmit} />
      </PageContainer>
    
    </div>
  )
}

export default Create