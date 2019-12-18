import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({openDialogs, id, close, content}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(openDialogs[id])
  }, [openDialogs, id])

  const closeDialog = () => {
    close()
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={closeDialog}
    >
      <DialogTitle>Chart Information</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary" className='dialog-text'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}