import React from 'react'
import { More } from '@mui/icons-material'
import { IconButton, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'

import useModal from '../../../../hooks/useModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const DescriptionModal = ({ description }) => {
  const { open, handleClose, handleOpen } = useModal()

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="more">
        <More />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default DescriptionModal
