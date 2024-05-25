import { useEffect, useState } from 'react';
import './App.css';
import { AxiosHttpClient } from './api/AxiosHttpClient';
import { WelcomeMessage, WelcomeRepository } from './api/repositories/WelcomeRepository';
import { WelcomeService } from './api/services/WelcomeService';

function App() {
  const useService = new WelcomeService(new WelcomeRepository(new AxiosHttpClient()));
  const [welcomeMessage, setWelcomeMessage] = useState<WelcomeMessage>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await useService.getWelcomeMessage();
      setWelcomeMessage(response); 
    }
    fetchData();
  });


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {welcomeMessage}
        </p>
      </header>
    </div>
  );
}

export default App;
