import { Box, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { ENV, type Cat, SearchParams } from '../../constants';
import { Card } from '../../components/Card';
import { useSearchParams } from 'react-router-dom';

type GalleryProps = {
  favorites?: boolean;
};

export const Gallery = ({ favorites }: GalleryProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get(SearchParams.page) ?? 0;
  const limit = searchParams.get(SearchParams.limit) ?? 12;

  const { isPending, error, data } = useQuery({
    queryKey: ['catsData'],
    queryFn: async (): Promise<Cat[]> =>
      await fetch(`${ENV.apiEndpoint}?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          [ENV.apiHeaderName]: ENV.apiKey,
        },
      }).then(async (res) => await res.json()),
  });

  console.log({ isPending, error, data });
  console.log(favorites, setSearchParams);

  return (
    <>
      <Grid container spacing={3} padding={3}>
        {data
          ? data.map((cat) => (
              <Grid key={cat.id} item xs={6} md={3}>
                <Card {...cat} />
              </Grid>
            ))
          : ''}
      </Grid>
      <Box textAlign="center" display="block" flexGrow={1}>
        {isPending ? <Typography>Loading...</Typography> : ''}
        {error ? <Typography>{error.message}</Typography> : ''}
      </Box>
    </>
  );
};
