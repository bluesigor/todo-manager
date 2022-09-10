import React from 'react'
import { Typography, Stack } from '@mui/material'

import DescriptionModal from './DescriptionModal'
import Completed from './Completed'
import RemoveTodo from './RemoveTodo'
import UpdateTodoModal from '../updateTodoModal/UpdateTodoModal'
import { Done } from '@mui/icons-material'

const TodosListItem = ({ title, date, description, id, todo, isComplete }) => {
  return (
    <Stack
      paddingX={1}
      alignItems="center"
      border="1px solid black"
      display="flex"
      flexDirection="row"
      minHeight="100px"
      sx={{
        '&:nth-of-type(even)': {
          backgroundColor: 'lightgray',
        },
      }}
    >
      <Stack flex={6} direction="row">
        {isComplete && <Done />}
        <Typography ml={4}>{title}</Typography>
      </Stack>
      <Stack
        flex={6}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Typography component="p">{date}</Typography>
        <Completed id={id} />
        <DescriptionModal description={description} />
        <UpdateTodoModal todo={todo} />
        <RemoveTodo id={id} />
      </Stack>
    </Stack>
  )
}

export default TodosListItem
