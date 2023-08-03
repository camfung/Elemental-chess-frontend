import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./TabPanel.css"
import GameHistory from './GameHistory';
import GameControlPanel from './GameControlPanel';
import GameChat from './GameChat';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const historyData = [
    { result: 'Win' },
    { result: 'Loss' },
    { result: 'Draw' },
    // Add more objects for each round of the game
  ];
  return (
    <div class="tab-pannel-wrapper transparentBlack-bgd primary-txt">
      <div class="tabs-wrapper ">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Play" {...a11yProps(0)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <GameHistory history={historyData}></GameHistory>
        <GameControlPanel></GameControlPanel>
        <GameChat></GameChat>
      </TabPanel>
    </div>
  );
}