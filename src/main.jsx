import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
//import HasprCursor from "haspr-cursor"; // Import Wrapper
//import "haspr-cursor/dist/cursor.css";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          {/*<HasprCursor >*/}
               <App />
          {/*</HasprCursor>*/}
     </React.StrictMode>
);
