import React from 'react'
import { PostItem } from '../hooks/hooksinterface'


interface PostsProps {
  isLoading: boolean
  postDatas: PostItem[]
}

const NewsLists: React.FC<PostsProps> = ({ isLoading, postDatas }: PostsProps) => {

  if (isLoading) {
    return (
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12} pt={10}>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <>
        {postDatas.map((post) => {
          return (
            <Box key={post.id} mt={3} width={'100%'}>
              <Card>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    {post.title}
                  </Typography>
                  <Typography mb={1.5} color='text.secondary'>
                    by: {post.by}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href={post.url} target='_blank' size='small'>詳細</Button>
                </CardActions>
              </Card>
            </Box>
          )
        })}
      </>
    )
  }
}

export default NewsLists