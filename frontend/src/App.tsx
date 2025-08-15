import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <p></p>
    </AuthProvider>
  );
}

export default App;
