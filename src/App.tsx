import { Suspense } from "react";
import AppRoutes from "./routes";
import { Toaster } from "./utils/toast";
import { LoadingBarContainer } from "react-top-loading-bar";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <LoadingBarContainer>
        <Toaster />
        <AppRoutes />
      </LoadingBarContainer>
    </Suspense>
  );
}

export default App;
