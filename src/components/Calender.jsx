import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function ResponsiveMuiCalendar() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="bg-white rounded-2xl  shadow-sm border border-gray-100 max-w-full sm:max-w-sm w-full">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          value={value}
          onChange={setValue}
          views={['day']} // shows day-level calendar, like your original
          sx={{
            // optional: tweak size, font, colors with sx
            '& .MuiPickersDay-root': {
              fontSize: 'clamp(0.4rem, 1.6vw, 0.9rem)',
              width: 'clamp(1.8rem,4vw,2.3rem)',
              height: 'clamp(1.8rem,4vw,2.3rem)',
              borderRadius: '50%',
              transition: 'background 0.2s',
            },
            '& .Mui-selected': {
              backgroundColor: '#FF6A1A !important', // Figma orange
              color: '#fff !important',
            },
            '& .MuiPickersDay-root.Mui-selected:hover, & .MuiPickersDay-root.Mui-selected:focus': {
              backgroundColor: '#FF6A1A !important',
            },
            '& .MuiPickersDay-root:not(.Mui-selected):hover': {
              backgroundColor: '#FFF3E6', // light orange hover
            },
            '& .MuiPickersDay-today': {
              border: '1.5px solid #FF6A1A',
            },
            '& .MuiPickersArrowSwitcher-button': {
              backgroundColor: '#FF6A1A',
              color: '#fff',
              borderRadius: '50%',
              width: 36,
              height: 36,
              margin: '0 1px',
              transition: 'background 0.2s',
              '&:hover': {
                backgroundColor: '#e65c00',
              },
            },
            '& .MuiPickersArrowSwitcher-button .MuiSvgIcon-root': {
              color: '#fff',
              fontSize: 22,
            },
          }}
        />
      </LocalizationProvider>

    
    </div>
  );
}
