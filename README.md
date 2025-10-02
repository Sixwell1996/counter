# React Counter App

A responsive counter application built with React and Material UI, featuring theme customization and persistent state.

## Features

- Interactive counter with increment, decrement, and reset functionality
- Customizable step size for value changes
- Optional minimum and maximum value constraints
- Action log displaying the last 5 operations
- Persistent counter state using localStorage
- Theme support (light, dark, and auto modes) with custom designed UI
- Animated counter value changes
- Responsive design for all device sizes

## Tech Stack

- React 18
- Material UI
- Custom hooks for state management
- Local storage for persistence

## Installation

1. Clone the repository:

   git clone https://github.com/Sixwell1996/counter.git

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

## Usage

- Use the **+** and **-** buttons to increment or decrement the counter
- Change the step size with the step selector
- Set optional minimum and maximum limits
- Toggle between themes using the theme switcher in the top right corner
- View your recent actions in the action log panel

## Project Structure

src/
├── components/
│   ├── ActionLog/       # Displays recent counter actions
│   ├── Counter/         # Main counter component
│   ├── LimitsControl/   # Min/max value controls
│   ├── StepSelector/    # Step size selector
│   └── ThemeToggle/     # Theme switching component
├── context/
│   └── ThemeContext.js  # Theme management context
├── hooks/
│   ├── useCounter.js    # Counter state management hook
│   └── useLocalStorage.js # Persistent storage hook
└── theme/
├── darkTheme.js     # Dark theme configuration
├── lightTheme.js    # Light theme configuration
└── index.js         # Theme exports and common styles

