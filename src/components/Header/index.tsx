import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../router/routes';
import { AppBar, Box, Toolbar } from '@mui/material';

export const Header = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <nav>
              <ul>
                {Object.keys(APP_ROUTES).map((key) => {
                  return (
                    <li key={key}>
                      <NavLink to={APP_ROUTES[key].link}>
                        {APP_ROUTES[key].label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
