import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

createRoot(document.querySelector("#root") as HTMLElement).render(
        <RouterProvider router={router} />
)
