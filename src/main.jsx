import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./router/AppRouter.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </AuthProvider>
  </StrictMode>
);
