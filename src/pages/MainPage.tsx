import { Box, Button, TextField, Typography } from '@mui/material';

export const MainPage = () => {
  //const [firstInput, firstInputSet] = useState('');
  //const [secondInput, secondInputSet] = useState('');
  return (
    <>
      <Typography variant="h2">Attention</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" component="p">
          This is a simple weather app that uses OpenWeatherMap API to get the
          weather data. Search will be implemented with debounce and also search
          of the city will be implemented with onClick event of button.
        </Typography>
      </Box>
      <Box sx={{ mt: 5, display: 'flex', gap: 15 }}>
        <Box sx={{ mt: 2 }}>
          <TextField id="filled-basic" label="City name" variant="filled" />
        </Box>
        <Box>
          <Box sx={{ mt: 2, display: 'flex', gap: 5 }}>
            <TextField id="filled-basic" label="City name" variant="filled" />

            <Button variant="contained">Find a city weather</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
