import { Button, Grid2 as Grid, Stack, styled, TextField } from '@mui/material'
import { FC, useState } from 'react'
import TagSelect from '../tagSelect'
import { Note, NoteData } from '../../types'
import { Link } from 'react-router-dom'

const Label =styled('label')`
font-size:1rem;

`

interface Props {
    note?:Note,
    handleSubmit: (data:NoteData) => void
}

const Form:FC<Props> = ({note,handleSubmit}) => {

    

    const [title, setTitle] = useState<string>(note?.title || "");
    const [markdown, setMarkdown] = useState<string>(note?.markdown || "");
    const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags ?? []);

   
    const handleForm = () => {
        
        if(!title || !markdown || !selectedTags.length){
            return alert("Lütfen tüm alanları doldurunuz")
            
        }
        handleSubmit({title,markdown,tags:selectedTags})
        
    }
  return (
    
    <Stack spacing={7} sx={{mt:5}}>
        <Grid container spacing={5}>
            <Grid size={6}>
                <TextField value={title} label='Başlık' name='title' variant='outlined' fullWidth onChange={(e)=>setTitle(e.target.value)} />
            </Grid>
            <Grid size={6}>
            <TagSelect selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            </Grid>
        </Grid>
        <Stack gap={2}>
            <Label>İçerik (markdown desteği var)</Label>
            <TextField value={markdown} minRows={15} maxRows={50} multiline   variant='outlined' fullWidth onChange={(e)=>setMarkdown(e.target.value)} />
            
        </Stack>
        <Stack direction='row' spacing={5} justifyContent='end' >
            <Button component={Link} to=".." type='button' variant='contained' color='secondary' sx={{minWidth:"100px"}}>Geri</Button>
            <Button onClick={handleForm} sx={{minWidth:"100px"}} variant='contained' >Kaydet</Button>
        </Stack>
    </Stack>
    
  )
}

export default Form