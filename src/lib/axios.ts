import axios from 'axios';

// export const axiosInstance=axios.create({
//     headers: {
//         'apikey': 'ac1c57a12fefdf038495190f1015e39df180fcd95453a7f03bd086fe4a6a775d',
//         'Content-Type': 'application/json'
//       },
// })

export const axiosInstance = axios.create({
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_JOB_API_KEY,
        'x-rapidapi-host': 'linkedin-jobs-data-api.p.rapidapi.com',
    },
});
