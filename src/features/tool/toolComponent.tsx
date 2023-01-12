import { BookmarkAdd } from '@mui/icons-material'
import { AspectRatio, Box, Button, IconButton, Typography, Card } from '@mui/joy'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../app/store'
import Lend from '../../models/lend'

import Tool from '../../models/tool'
import User from '../../models/user'
import { createOrUpdateLendRedux } from '../lend/lendSlice'

type toolProps = {
  tool: Tool
}
export function ToolComponent({ tool }: toolProps) {
  const lends: Lend[] = useSelector((state: RootState) => state.lendSlice.lends)
  const users: User[] = useSelector((state: RootState) => state.userSlice.users)
  const toolLends = lends.filter(lend => lend.returnDate == null && lend.tool.id == tool.id)
  const navigate = useNavigate()
  const user = users.find(user => user.tz === localStorage.getItem('USER'))
  const dispatch: AppDispatch = useDispatch()
  function handleLend() {
    if (!user) return navigate('signin')
    dispatch(createOrUpdateLendRedux({
      lendingDate: new Date(),
      returnDate: null,
      tool,
      user
    }))
    window.location.reload()
  }
  return (
    <Card variant="outlined" sx={{ width: 320, margin: '10px' }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        <h2>{tool.name}</h2>
      </Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={tool.image} alt="" style={{}}/>
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3"><b>Company: </b>{tool.manufacturingCompany}</Typography>
          <Typography level="body3"><b>Quantity: </b>{tool.quantity}</Typography>
          <Typography level="body3"><b>Available: </b>{tool.quantity - toolLends.length}</Typography>
        </div>
        {tool.quantity - toolLends.length > 0 && <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
          onClick={handleLend}
        >
          Lend
        </Button>}
      </Box>
    </Card>
  )
}

//<Card variant="outlined" sx={{ width: 320 }}>
//<Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
//   {tool.description}
// </Typography>
// {/* <Typography level="body2">April 24 to May 02, 2021</Typography> */}
// <IconButton
//   aria-label="bookmark Bahamas Islands"
//   variant="plain"
//   color="neutral"
//   size="sm"
//   sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
// >
//   <BookmarkAdd />
// </IconButton>
// <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
//   <img src={tool.image} alt="" />
// </AspectRatio>
// <Box sx={{ display: 'flex' }}>
//   <div>
//     <Typography level="body3">{tool.manufacturingCompany}</Typography>
//   </div>
//   <Button
//     variant="solid"
//     size="sm"
//     color="primary"
//     aria-label="Explore Bahamas Islands"
//     sx={{ ml: 'auto', fontWeight: 600 }}
//   >
//     Lend
//   </Button>
// </Box>
// </Card>
