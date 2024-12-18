import {getRouteApplications, getRouteApplicationsProfile, getRouteDashboard, getRouteMain} from "shared/const/routers";
import {DashboardPage} from "pages/dashboardPage";

import {ApplicationPage} from "../../../pages/applicationPage";
import {ApplicationProfile} from "../../../pages/applicationProfilePage";


export const routersConfig = [
    {
        name: "Bosh Sahifa",
        path: getRouteMain(),
        // element: <HomePage/>,
        element: null,
    },

    {
        path: getRouteDashboard(),
        element: <DashboardPage/>,
    },
    {
        path: getRouteApplications(),
        element: <ApplicationPage/>,
    },

    // {
    //     path: getRouteApplicationsProfile(),
    //     element: <ApplicationProfile/>
    // }

]