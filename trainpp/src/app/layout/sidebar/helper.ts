export interface ISidebarData{
    routeLink?: string;
    icon?: string;
    label: string;
    items?: ISidebarData[];
    expanded?: boolean;

}