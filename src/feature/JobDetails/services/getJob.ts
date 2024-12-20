import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../lib/axios';

export const useGetJob = (id: string) => {
    console.log(id);
    return useQuery({
        queryKey: ['job'],
        queryFn: () => {
            return axiosInstance
                .get(
                    'https://linkedin-jobs-data-api.p.rapidapi.com/jobs/detail',
                    { params: { job_id: id } }
                )
                .then((data) => {
                    console.log(data.data);
                    return data.data.data;
                });
        },
    });
};
