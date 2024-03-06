import { ISidebarData } from "./helper";

export const sidebarData: ISidebarData[] = [
    {
        label: 'Home',
        icon: 'heroHome',
        routeLink: '/home'
    },
    {
        label: 'Dashboard',
        icon: 'heroCog',
        routeLink: '/login'
    },

    {
        label: 'Scorecard',
        icon: 'heroClipboard',
        routeLink: '/login'
    },
    {
        label: 'Workbench',
        icon: 'heroBriefcase',
        // routeLink: '/login',
        items: [
            {
                routeLink: 'workbench/sub1',
                label: 'SubOne',
                icon: 'heroBriefcase',

            },

            {
                routeLink: 'workbench/sub2',
                label: 'SubTwo',
                icon: 'heroBriefcase',

            }
        ]
    },
    {
        label: 'Programs',
        icon: 'heroBriefcase',
        // routeLink: '/login',
        items: [
            {
                routeLink: 'workbench/sub1',
                label: 'SubOne',
                icon: 'heroBriefcase',

            },

            {
                routeLink: 'workbench/sub2',
                label: 'SubTwo',
                icon: 'heroBriefcase',

            }
        ]
    },
    {
        label: 'Canvas',
        icon: 'heroPencilSquare',
        routeLink: '/login'
    }

];