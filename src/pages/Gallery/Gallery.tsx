import { Grid } from '@mui/material';

type GalleryProps = {
  favorites?: boolean;
};

export const Gallery = ({ favorites }: GalleryProps): JSX.Element => {
  console.log(favorites);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        1
      </Grid>
    </Grid>
  );
};
