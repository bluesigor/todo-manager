import { useState } from 'react'

const usePoper = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'simple-popper' : undefined

  return { handleClick, id, anchorEl, open, handleClose }
}

export default usePoper
