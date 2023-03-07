import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing CSS
import './assets/css/main.css';
import './assets/css/home.css';
import './assets/css/authentication.css';

// Importing Pages
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

// Importing FirebaseProvider
import { AuthProvider } from "./providers/AuthProvider";
import { FirebaseProvider } from "./providers/FirebaseProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            {/* Index Page */}
            <Route index element={<Index />} />
            {/* Register Page */}
            <Route path='/register' element={<Register />} />
            {/* Login Page */}
            <Route path='/login' element={<Login />} />

            {/* Dashboard Page (Restricted) */}
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </FirebaseProvider>


  );
}

export default App;
