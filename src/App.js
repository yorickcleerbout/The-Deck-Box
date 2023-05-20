import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing CSS
import './assets/css/main.css';
import './assets/css/home.css';
import './assets/css/authentication.css';
import './assets/css/dashboard.css';
import './assets/css/sidebar.css';


// Importing Pages
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

// Importing Restricted Pages
import Overview from "./pages/dashboard/Overview";
import Cards from "./pages/dashboard/Cards";
import Decks from "./pages/dashboard/Decks";
import Shared from "./pages/dashboard/Shared";
import Settings from "./pages/dashboard/Settings";

// Importing FirebaseProvider
import { AuthProvider } from "./providers/AuthProvider";
import { FirebaseProvider } from "./providers/FirebaseProvider";


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

            {/* Overview Page (Restricted) */}
            <Route path='/dashboard' element={<Overview />} />
            {/* Cards Page (Restricted) */}
            <Route path='/cards' element={<Cards />} />
            {/* Decks Page (Restricted) */}
            <Route path='/decks' element={<Decks />} />
            {/* Shared Page (Restricted) */}
            <Route path='/shared' element={<Shared />} />
            {/* Settings Page (Restricted) */}
            <Route path='/settings' element={<Settings />} />

          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </FirebaseProvider>


  );
}

export default App;
