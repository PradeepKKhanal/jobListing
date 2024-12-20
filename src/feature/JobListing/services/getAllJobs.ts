import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../lib/axios';

export const useGetAllJobs = () => {
    return useQuery({
        queryKey: ['allJobs'],
        // queryFn:()=>{
        //     return axiosInstance.post('https://api.apijobs.dev/v1/job/search').then(data=>{
        //         console.log(data)
        //         return data.data.hits
        //     })
        // }
        queryFn: () => {
            return axiosInstance
                .get(
                    'https://linkedin-jobs-data-api.p.rapidapi.com/jobs/search',
                    {
                        params: {
                            keywords: 'software engineer',
                        },
                    }
                )
                .then((data) => {
                    console.log(data);
                    return data.data.data.jobs;
                });
        },
    });
};
