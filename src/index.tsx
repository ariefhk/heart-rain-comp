import "./styles/css/index.css";
import "./styles/css/reset.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RoutePages from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <RoutePages />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
