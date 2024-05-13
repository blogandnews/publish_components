export interface BannerProps {
    logo: string;
    navigations: NavigationItems[];
}



export interface NavigationItems {
    link?: string;
    name: string;
}