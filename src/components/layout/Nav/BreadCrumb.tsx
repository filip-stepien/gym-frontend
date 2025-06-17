import { Breadcrumb as AntBreadCrumb } from 'antd';
import { useLocation } from 'react-router';
import validator from 'validator';

type BreadCrumbProps = {
    className?: string;
};

// breadcrumb element rendered at the beggining of the current path
const firstBreadCrumbItem = { title: 'Home' };

export function BreadCrumb({ className }: BreadCrumbProps) {
    const location = useLocation();

    const breadCrumbItems = location.pathname
        .split('/') // tokenize path
        .filter(path => path) // remove empty strings
        .map(pathname => (validator.isUUID(pathname) ? 'Details' : pathname)) // hide uuids
        .map(pathname => pathname.charAt(0).toUpperCase() + pathname.slice(1)) // capitalize pathnames
        .map(pathname => ({ title: pathname })); // convert to breadcrumb items
    return (
        <AntBreadCrumb className={className} items={[firstBreadCrumbItem, ...breadCrumbItems]} />
    );
}
