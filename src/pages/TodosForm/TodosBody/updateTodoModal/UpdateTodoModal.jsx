import React, { useState } from 'react'
import { IconButton, Modal, Box, Typography, Button } from '@mui/material'
import { Edit } from '@mui/icons-material'

import { useTodosContext } from '../../../../context/TodosContext'

import { validateTodo } from '../../../../helpers/validationTodo'
import getTime from '../../../../helpers/date'
import Localize from '../../../../common/components/Localize'
import useModal from '../../../../hooks/useModal'

import UpdateDescriptionModal from './components/UpdateDescriptionModal'
import UpdateTitleModal from './components/UpdateTitleModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '50vh',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const UpdateTodoModal = ({ todo }) => {
  const [updateData, setUpdateData] = useState({
    title: todo.title,
    description: todo.description,
    id: todo.id,
    date: todo.date,
    isComplete: todo.isComplete,
  })

  const [isError, setIsError] = useState(false)
  const { handleOpen, open, handleClose } = useModal()

  const { updateTodo } = useTodosContext()

  const handleUpdateSubmit = (e) => {
    e.preventDefault()

    const dateTime = getTime()
    const isValid = validateTodo(updateData)

    if (!isValid) {
      setIsError(true)
    }

    if (isValid) {
      updateTodo(updateData.id, { ...updateData, date: dateTime })

      handleClose()

      setIsError(false)
    }
  }

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="edit">
        <Edit />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Localize>Edit your task</Localize>
          </Typography>
          <Box
            onSubmit={handleUpdateSubmit}
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '90%',
              mt: 2,
              flexDirection: 'column',
            }}
          >
            <UpdateTitleModal
              error={isError}
              setUpdateData={setUpdateData}
              title={updateData.title}
            />
            <UpdateDescriptionModal
              setUpdateData={setUpdateData}
              description={updateData.description}
            />
            <Button
              type="submit"
              sx={{
                marginTop: '30px',
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default UpdateTodoModal
