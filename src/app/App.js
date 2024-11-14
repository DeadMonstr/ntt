import {ApplicationPage} from "pages/applicationPage";
import {DashboardPage} from "pages/dashboardPage";
import {ApplicationProfile} from "pages/applicationProfilePage";

function App() {
    return (
        <div
            style={{
                width: "100%",
                // height: "100vh",
                background: "rgba(231, 243, 255, 1)"
            }}
        >
            <ApplicationProfile/>
            <ApplicationPage/>
          <DashboardPage/>
        </div>
    );
}

export default App;
