import './App.css';
import { AuthProvider } from './context/Auth';
import { Rotas } from './routes/Route';

function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
