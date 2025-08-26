import { Typography } from '@mui/material'
import { Chip, Box, Button, Stack } from '@mui/material'
import React, { FC } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import PageContainer from '../../styled/pageContainer'
import { Note } from '../../types'
import Markdown from 'react-markdown'
import { deleteNote } from '../../redux/slices/noteSlice'
import { useDispatch } from 'react-redux'

const Detail: FC = () => {
  // Outlet elementine gönderilen context propuna erişmeye yarar
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <PageContainer>
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Box>
          <Stack gap={1}>
            <Typography variant="h3">{note.title}</Typography>

            <Stack direction="row" gap={1} flexWrap="wrap" mt={2}>
              {note.tags.map((tag) => (
                <Chip label={tag} />
              ))}
            </Stack>
          </Stack>

          <Box marginY={4} className="markdown">
            <Markdown>{note.markdown}</Markdown>
          </Box>
        </Box>

        <Stack direction="row" gap={2} justifyContent="end" py={4}>
          <Button component={Link} to="/">
            Geri
          </Button>

          <Button component={Link} to="edit" variant="contained" color="info">
            Düzenle
          </Button>

          <Button variant="contained" color="error" onClick={handleDelete}>
            Sil
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Detail