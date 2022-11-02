import * as React from 'react';
import Box from '@mui/material/Box';
import {Stack,Button} from '@mui/material/';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

const Content = () =>{
    return(
        <Container>
          <Typography variant="h2" gutterBottom>
            Halaman About
          </Typography>
        <Box sx={{ my: 2, mt:6 }}>
          {[...new Array(12)]
            .map(
              () => `
                      HALAMAN ABOUT
                      Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>

        <Stack direction="row" spacing={97} sx={{ mb: 7 }}>
        <Button variant="contained" href="/dashboard" endIcon={<SendIcon />} >Back To Dashboard</Button>
        <Button variant="contained" href="/blog" color="success" endIcon={<SendIcon />} >
          Go To Blog
        </Button>
          {/* <Button href="/blog" color="inherit">Blog</Button> */}
        </Stack>
      </Container>

    )
}

export default Content