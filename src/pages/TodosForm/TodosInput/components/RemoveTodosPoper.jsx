import { Box, Popper, Button } from '@mui/material'
import React from 'react'

import Localize from '../../../../common/components/Localize'
import { useTodosContext } from '../../../../context/TodosContext'
import useCrud from '../../../../hooks/useCrud'
import usePoper from '../../../../hooks/usePoper'

const RemoveTodosPoper = () => {
  const { handleClick, id, anchorEl, open, handleClose } = usePoper()
  const { removeAll } = useCrud()
  const { todosList } = useTodosContext()

  if (!todosList.length) {
    return null
  }

  return (
    <>
      <Button
        sx={{
          mt: '20px',
          width: '100%',
        }}
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        variant="outlined"
        color="warning"
      >
        <Localize>Delete All</Localize>
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <Localize>Sure you want to delete all items?</Localize>
          <Button
            onClick={() => {
              removeAll()
              handleClose()
            }}
          >
            <Localize>Confirm</Localize>
          </Button>
          <Button onClick={handleClose}>
            <Localize>Cancel</Localize>
          </Button>
        </Box>
      </Popper>
    </>
  )
}

export default RemoveTodosPoper
