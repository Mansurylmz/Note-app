import { RootState } from '../../redux/store'
import React, { FC, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import PageContainer from '../../styled/pageContainer';
import { Alert, Button, Grid2 as Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Filter from '../../components/filter';
import NoteCard from '../../components/card/noteCard';

const Home:FC = () => {

  const { notes } = useSelector((store: RootState) => store.notes);

  const[title,setTitle] = useState<string>('')
  const [selectedTags,setSelectedTags] = useState<string[]>([])

  const filtredNotes = useMemo(
    () =>
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((sTag) => note.tags.includes(sTag))
      ),
    [notes, title, selectedTags]
  );
  
  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <img src="/logo.png" alt="logo" width={50} height={50} />
      <Typography variant="h4">Notlar</Typography>
      </Stack>
      <Button component={Link} to="/create" variant="contained" >Not Ekle</Button>
      </Stack>
      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />
      <Grid container spacing={2} mt={4}>
        {filtredNotes.length === 0 ? (
          <Grid size={12}>
            <Alert severity="warning">Not Bulunamadı</Alert>
          </Grid>
        ) : (
          filtredNotes.map((note) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={note.id}>
              <NoteCard key={note.id} note={note} />
            </Grid>
          ))
        )}
      </Grid>
    </PageContainer>
  );
};

export default Home