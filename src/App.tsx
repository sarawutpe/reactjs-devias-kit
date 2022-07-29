import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import DashboardLayout from "./components/DashboardLayout";
import Index from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";

const App: React.FC<any> = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/product" element={<Product />} />
              <Route path="/account" element={<Account />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/404" element={<Error404 />} />
            </Routes>
          </DashboardLayout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
