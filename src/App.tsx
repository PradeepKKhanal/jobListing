import JobListing from './feature/JobListing/screens/JobListing';
import JobDetails from './feature/JobDetails/screens/JobDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
function App() {
    return (
        <>
            {/* <JobListing></JobListing> */}
            {/* <JobDetails></JobDetails> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<JobListing />} />
                    <Route path="/:id" element={<JobDetails />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </BrowserRouter>
            <Toaster />
        </>
    );
}

export default App;
