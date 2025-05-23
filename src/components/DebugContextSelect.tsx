import { useUser } from '@/hooks/useUser';
import { Flex, Select } from 'antd';
import userConfigMap, { UserRole } from '@/roles';
import { useNavigate } from 'react-router';

export function DebugContextSelect() {
    const { user, setUserDetails } = useUser();
    const navigate = useNavigate();
    const selectOptions = Object.keys(userConfigMap).map(e => ({ label: e, value: e }));

    const handleSelect = (role: UserRole) => {
        const { defaultRoute, routePrefix } = userConfigMap[role];
        setUserDetails(prev => ({ ...prev, role }));
        navigate(routePrefix + defaultRoute);
    };

    return (
        <Flex vertical className='p-small absolute bottom-0 z-10 w-50' gap='small'>
            <span className='font-bold'>Test role context</span>
            <Select onSelect={handleSelect} defaultValue={user?.role} options={selectOptions} />
        </Flex>
    );
}
