import { createContext, useContext, useState } from 'react';

// Creating the context with default values
export const ThemeContext = createContext({
  isOpenForSideBar: true,  // default sidebar state
  toggleSidebar: () => {}  // function to toggle the sidebar
});

// ThemeProvider component that holds the state and provides it via context
export const ThemeProvider = ({ children }) => {
  const [isOpenForSideBar, setIsOpenForSideBar] = useState(true); // default state for sidebar

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsOpenForSideBar(prevState => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isOpenForSideBar, toggleSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export default function useTheme() {
  return useContext(ThemeContext);
}
