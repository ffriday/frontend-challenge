import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { AppRoutes } from '../../constants';
import { useNavigate } from 'react-router-dom';

type Pages = {
  name: string;
  link: AppRoutes;
};

const pages: Pages[] = [
  { name: 'Cats', link: AppRoutes.root },
  { name: 'Favorites', link: AppRoutes.favorite },
];

export const TopMenu = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={() => navigate(link)}
                sx={{ gap: 10, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
