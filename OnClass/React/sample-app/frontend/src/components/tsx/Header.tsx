import React from 'react'

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          NewsSite
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header