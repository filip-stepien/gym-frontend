import {
    CurrentMaintenanceTaskHall,
    CurrentMaintenanceTasksCard
} from '@/components/cards/CurrentMaintenanceTasksCard';
import { EmployeeCreationCard, EmployeeValues } from '@/components/cards/EmployeeCreationCard';
import { Page } from '@/components/layout/Page';
import { listMaintenanceTasks, MaintenanceTaskDto } from '@/generated/gym-api';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const employeeCreationCardData = {
    onCreate: (values: EmployeeValues) => {
        // POST...
        console.log(values);
    }
};

export function ManagerDashboardPage() {
    const [maintenanceTasks, setMaintenanceTasks] = useState<CurrentMaintenanceTaskHall[]>([]);

    useEffect(() => {
        async function getMaintenanceTasks() {
            try {
                const response = await listMaintenanceTasks();
                const rawTasks = response.data.content ?? [];

                const transformedTasks: CurrentMaintenanceTaskHall[] = rawTasks.map(
                    (task: MaintenanceTaskDto) => ({
                        hallNumber: 'Number', // need fix
                        description: task.description ?? 'No description',
                        detailsHref: `manager/details/${task.uuid ?? ''}`,
                        duration: {
                            startTime: dayjs(task.plannedStartDate),
                            endTime: dayjs(task.plannedEndDate)
                        }
                    })
                );

                setMaintenanceTasks(transformedTasks);
            } catch (error) {
                console.error('Error fetching maintenance tasks:', error);
                setMaintenanceTasks([]);
            }
        }

        getMaintenanceTasks();
    }, []);

    return (
        <Page>
            <EmployeeCreationCard {...employeeCreationCardData} />
            <CurrentMaintenanceTasksCard halls={maintenanceTasks} />
        </Page>
    );
}
