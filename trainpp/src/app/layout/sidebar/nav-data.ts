import { ISidebarData } from "./helper";

export const to_sidebarData: ISidebarData[] = [
    {
        label: 'Dashboard',
        icon: 'heroCog',
        routeLink: '/to/home'
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
        icon: 'heroQueueList',
        routeLink: '/to/programlist',
    },
    {
        label: 'Attendance Management',
        icon: 'heroUserPlus',
        // routeLink: '/login',
        items: [
            {
                // routeLink: 'workbench/sub1',
                label: 'View Attendance',
                icon: 'heroListBullet',

            },
            {
                // routeLink: 'workbench/sub2',
                label: 'Recommend Leave',
                icon: 'heroCheckBadge',

            }
        ]
    }

];


//DGM
export const dgm_sidebarData: ISidebarData[] = [
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
        label: 'Resource Management',
        icon: 'heroBuildingOffice2',
        // routeLink: '/programlist',
        items: [
            {
                // routeLink: 'workbench/sub1',
                label: 'Block',
                icon: 'heroNoSymbol',

            },
        ]
    },
    {
        label: 'In-plant Training',
        icon: 'heroBuildingOffice',
        // routeLink: '/login',
        items: [
            {
                // routeLink: 'workbench/sub1',
                label: 'Contract Management',
                icon: 'heroPencilSquare',

            }
        ]
    },

];