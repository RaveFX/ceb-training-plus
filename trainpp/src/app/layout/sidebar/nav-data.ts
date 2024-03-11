import { ISidebarData } from "./helper";

export const sidebarData: ISidebarData[] = [
    {
        label: 'Dashboard',
        icon: 'heroCog',
        routeLink: '/home'
    },
    {
        label: 'Scorecard',
        icon: 'heroClipboard',
        // routeLink: '/scorboard'
    },
    {
        label: 'Workbench',
        icon: 'heroBriefcase',
        routeLink: '/workbench',
    },
    {
        label: 'Canvas',
        icon: 'heroPencilSquare',
        routeLink: '/canvas',
    },
    {
        label: 'Program List',
        icon: 'heroBriefcase',
        routeLink: '/canvas',
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
        // routeLink: '/login'
    }

];