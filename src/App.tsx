import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import './App.scss';
import Header from './header/Header';
import UserCard from './userCard/userCard';

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Header imageURL="https://avatars.githubusercontent.com/u/12816899?s=60&v=4" />
      <nav>
        <Tabs value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example">
          <Tab label="Overview" />
          <Tab label="Repositories" />
          <Tab label="Projects" />
          <Tab label="Packages" />
        </Tabs>
      </nav>
      <main className="grid">
        <UserCard imageURL="https://avatars.githubusercontent.com/u/12816899?v=4"
                  name="Kumar Sidharth" 
                  login="KumarSidharth"
                  bio="UI developer during the day, passionate gamer by night." />
      </main>
    </div>
  );
}

export default App;
