import {
    getRouteApplications,
    getRouteApplicationsProfile,
    getRouteDashboard,
    getRouteMain,
    getRouteOrganizationProfile
} from "shared/const/routers";
import {DashboardPage} from "pages/dashboardPage";

import {ApplicationPage} from "pages/applicationPage";
import {ApplicationProfile} from "pages/applicationProfilePage";
import {OrganizationProfilePage} from "pages/organizationProfilePage";


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
    {
        path: getRouteOrganizationProfile(),
        element: <OrganizationProfilePage/>
    }

    // {
    //     path: getRouteApplicationsProfile(),
    //     element: <ApplicationProfile/>
    // }

]