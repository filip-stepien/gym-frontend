import { Breadcrumb as AntBreadCrumb } from 'antd';
import { useLocation } from 'react-router';

// breadcrumb element rendered at the beggining of the current path
const firstBreadCrumbItem = { title: 'Home' };

export function BreadCrumb() {
    const location = useLocation();

    const breadCrumbItems = location.pathname
        .split('/') // tokenize path
        .filter(path => path) // remove empty strings
        .map(pathname => pathname.charAt(0).toUpperCase() + pathname.slice(1)) // capitalize pathnames
        .map(pathname => ({ title: pathname })); // convert to breadcrumb items

    return <AntBreadCrumb items={[firstBreadCrumbItem, ...breadCrumbItems]} />;
}
