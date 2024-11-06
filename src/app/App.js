import {ApplicationPage} from "pages/applicationPage";
import {DashboardPage} from "../pages/dashboardPage";

function App() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh"
            }}
        >
            <ApplicationPage/>
          <DashboardPage/>
        </div>
    );
}

export default App;
