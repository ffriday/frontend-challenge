import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { type Cat } from '../../constants';

export const Card = ({ id, url, width, height }: Cat): JSX.Element => {
  return (
    <ImageListItem key={'asd'}>
      <img src={url} alt={id} width={width} height={height} />
      <ImageListItemBar
        sx={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        title={''}
        position="top"
        actionIcon={
          <IconButton sx={{ color: 'white' }} aria-label={`cat ${id}`}>
            <StarBorderIcon />
          </IconButton>
        }
        actionPosition="right"
      />
    </ImageListItem>
  );
};
