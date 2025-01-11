import {getRouteApplications, getRouteDashboard, getRouteMain , getRouteOrganizations} from "shared/const/routers";
import {DashboardPage} from "pages/dashboardPage";

import {ApplicationPage} from "pages/applicationPage";
import {ApplicationProfile} from "../../../pages/applicationProfilePage";
import {OrganizationsPage} from "pages/organizations/ui/organizationsPage";
import {SettingsPage} from "pages/settings";
import {
    AboutOtm,
    AddDirections,
    BasicOrganization, Grants,
    OrganizationAbout,
    OrganizationProfile
} from "features/organizationProfile";
import {DirectionProfile} from "../../../features/organizationProfile/ui/directionProfile/directionProfile";
import {Gallery} from "../../../features/organizationProfile/ui/basicOrganization/basicOrganization";


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
        path: getRouteOrganizations(),
        element: <OrganizationsPage/>
    },
    {
        path: "settings",
        element: <SettingsPage/>,

    },
    {
        path: "organizations/organizationProfile/:id",
        element: <OrganizationProfile/>,
    },

    {
        path: "organizations/organizationProfile/:id/organizationAbout/:id",
        element: <OrganizationAbout/>
    },
    {
        path: "addDirections",
        element: <AddDirections/>
    },
    {
        path: "directionProfile/:id",
        element: <DirectionProfile/>
    },
    {
        path: "organizationBasicInfo/:id",
        element: <BasicOrganization/>
    },
    {
        path: "aboutOtm/:id",
        element: <AboutOtm/>
    },
    {
        path: "garants/:id",
        element: <Grants/>
    },

    {
        path: "gallery/:id",
        element: <Gallery/>
    }
    // {
    //     path: getRouteApplicationsProfile(),
    //     element: <ApplicationProfile/>
    // }

]