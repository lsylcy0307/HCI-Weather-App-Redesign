import { Box, Text, Flex, Button, Image } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';  // Your custom CSS styles for additional styling
import sunny from '../public/sunny.png'
import cloudy from '../public/cloudy.png'


function App() {
  return (
    <Flex justify="center" align="center" minHeight="70vh" className="container">
      <Box className="weather-app">
        {/* Events Section */}
        <Box className="events">
          <Flex className="event-card">
            <Box>
              <Text fontSize="xs" className="event-time">13:00</Text>
            </Box>
            <Box flex="1">
              <Text fontSize="xs" >Picnic with Friends</Text>
            </Box>
          </Flex>

          {/* Second Event */}
          <Flex className="event-card">
            <Box>
              <Text fontSize="xs" className="event-time">15:00</Text>
            </Box>
            <Box flex="1">
              <Text fontSize="xs">Grocery Shopping</Text>
            </Box>
          </Flex>
        </Box>

        {/* Date Section */}
        <Box textAlign="center" marginTop="0.5rem" marginBottom="0.5rem">
          <Text fontSize="25px" id="main-text">Sep. 5</Text>
        </Box>

        {/* Weather Circle */}
        <div className="ring-container">
          <svg width="260" height="260" viewBox="0 0 300 300" className="ring-svg">
            {/* Outer Ring */}
            <circle
              cx="150"
              cy="150"
              r="140"
              className='ring'
            />
            {/* Second Ring */}
            <circle
              cx="150"
              cy="150"
              r="115"
              className='ring'
            />
            {/* Third Ring */}
            <circle
              cx="150"
              cy="150"
              r="95"
              className='ring'
            />
            {/* Center Icon */}
            <svg width="300" height="300" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="70" fill="#007AFF" stroke="white" stroke-width="5" />
              <image href="/cloudy.png" x="115" y="110" height="75px" width="75px" />
            </svg>
          </svg>
        </div>

        {/* Temperature Info */}
        <Box textAlign="center" marginTop='12px'>
          <Text fontSize="13px" id="main-text" marginBottom="0">Temperature</Text> {/* Remove bottom margin */}
          <Text fontSize="45px" fontWeight="bold" id="main-text" >28°C</Text> {/* Add smaller margin */}
          <Text fontSize="13px" id="main-text" marginTop="0">Min: 21°C &nbsp; Max: 30°C</Text>
        </Box>


        {/* Forecast Section */}
        <Flex justify="space-between" className="forecast-cards">
          <Box className="forecast-card">
            <Text fontSize='xs'>15:00</Text>
            <Image src={sunny} id="weather-icon" ></Image>
            <Text fontSize='xs'>27°C</Text>
          </Box>
          <Box className="forecast-card">
            <Text fontSize='xs'>15:00</Text>
            <Image src={cloudy} id="weather-icon" ></Image>
            <Text fontSize='xs'>27°C</Text>
          </Box>
          <Box className="forecast-card">
            <Text fontSize='xs'>15:00</Text>
            <Image src={cloudy} id="weather-icon" ></Image>
            <Text fontSize='xs'>27°C</Text>
          </Box>
          <Box className="forecast-card">
            <Text fontSize='xs'>15:00</Text>
            <Image src={sunny} id="weather-icon" ></Image>
            <Text fontSize='xs'>27°C</Text>
          </Box>
          <Box className="forecast-card">
            <Text fontSize='xs'>15:00</Text>
            <Image src={sunny} id="weather-icon" ></Image>
            <Text fontSize='xs'>27°C</Text>
          </Box>
        </Flex>

        {/* Button */}
        <Flex justify="center" marginTop="1.2rem">
          <button class="ring-button">MY RING</button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
