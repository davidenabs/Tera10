import { Suspense } from "react";
import AppRoutes from "./routes";
import { Toaster } from "./utils/toast";
// import { LoadingBarContainer } from "react-top-loading-bar";
import "./App.css";
import LoaderProvider from "./providers/loader";

function App() {
  return (
    <>
      <Suspense fallback={<div className="">Loading...</div>}>
        <LoaderProvider>
          <Toaster />
          <AppRoutes />
        </LoaderProvider>
      </Suspense>
    </>
  );
}

export default App;
