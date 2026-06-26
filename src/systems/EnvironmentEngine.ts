// src/systems/EnvironmentEngine.ts
// Handles the mapping between real time/weather and the CSS custom properties 
// used for the living background and ambulance reactions.

export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night';
export type WeatherCondition = 'clear' | 'cloudy' | 'rain' | 'storm' | 'fog';

export interface EnvironmentState {
  time: TimeOfDay;
  weather: WeatherCondition;
  isHeadlightsNeeded: boolean;
  isWipersNeeded: boolean;
  ambientLightLevel: number; // 0 to 1
}

export const determineTimeOfDay = (date = new Date()): TimeOfDay => {
  const hour = date.getHours();
  if (hour >= 5 && hour < 9) return 'dawn';
  if (hour >= 9 && hour < 17) return 'day';
  if (hour >= 17 && hour < 20) return 'dusk';
  return 'night';
};

// Simulated weather for MVP (can be replaced with OpenWeatherMap API)
export const determineWeather = (): WeatherCondition => {
  // A simple deterministic pseudo-random function based on hour and day
  // Just to show dynamic weather if no API is available.
  const d = new Date();
  const seed = d.getHours() + d.getDate();
  if (seed % 7 === 0) return 'rain';
  if (seed % 11 === 0) return 'storm';
  if (seed % 5 === 0) return 'fog';
  if (seed % 3 === 0) return 'cloudy';
  return 'clear';
};

export const getEnvironmentState = (): EnvironmentState => {
  const time = determineTimeOfDay();
  const weather = determineWeather();
  
  // Logic rules from Blueprint Phase 1 / Phase 2
  const isNightTime = time === 'night' || time === 'dusk';
  const isDarkWeather = weather === 'storm' || weather === 'rain' || weather === 'fog';
  
  return {
    time,
    weather,
    isHeadlightsNeeded: isNightTime || isDarkWeather,
    isWipersNeeded: weather === 'rain' || weather === 'storm',
    ambientLightLevel: (isNightTime || isDarkWeather) ? 0.4 : 1.0
  };
};
