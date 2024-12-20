import { Box, VStack, Text, Heading, HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import JobListCard from '../components/JobListCard';
import {
    ProgressCircleRing,
    ProgressCircleRoot,
} from '@/components/ui/progress-circle';
import { useState, useEffect, Fragment } from 'react';
import { useGetAllJobs } from '../services/getAllJobs';
import Pagination from '../components/Pagination';
import { jobFavouriteStore } from '@/store/store';

const JobListing = () => {
    const { data, isLoading } = useGetAllJobs();
    const [isPrevious, setIsPrevious] = useState(false);
    const [isNext, setIsNext] = useState(false);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(9);
    const itemPerPage = 9;
    const [actualData, setAcutalData] = useState(data);
    const [activeButton, setActiveButton] = useState<'data' | 'favourites'>(
        'data'
    );
    const { favourites } = jobFavouriteStore();
    useEffect(() => {
        if (firstIndex >= itemPerPage) {
            setIsPrevious(true);
        } else {
            setIsPrevious(false);
        }

        if (lastIndex < actualData?.length) {
            setIsNext(true);
        } else {
            setIsNext(false);
        }
    }, [firstIndex, lastIndex]);

    useEffect(() => {
        setIsPrevious(false);

        if (actualData?.length <= itemPerPage) {
            setIsNext(false);
        } else {
            setIsNext(true);
        }
    }, [actualData]);

    useEffect(() => {
        setAcutalData(data);
    }, [data]);

    const handePreviousClick = () => {
        setLastIndex(firstIndex);
        setFirstIndex(firstIndex - itemPerPage);
        if (firstIndex > itemPerPage) {
            setIsPrevious(true);
        }
    };
    const handleNextClick = () => {
        setFirstIndex(lastIndex);
        setLastIndex(lastIndex + itemPerPage);
    };
    const activeButtonCss = {
        color: 'white',
        backgroundColor: 'primary.700',
    };
    return (
        <>
            <Box
                h={'450px'}
                bg={'primary.900'}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap="30px"
            >
                <VStack>
                    <Heading color={'tertiary.50'} fontSize={'3xl'}>
                        Find Your Dream Job Today
                    </Heading>
                    <Text color={'tertiary.200'} fontSize={'xs'} mt="10px">
                        Discover thousands of job opportunities with all the
                        information you need.
                    </Text>
                </VStack>
                <Box>
                    <HStack>
                        <Button
                            border={'none'}
                            visual={'secondary'}
                            css={activeButton === 'data' ? activeButtonCss : ''}
                            onClick={() => {
                                setAcutalData(data);
                                setActiveButton('data');
                            }}
                        >
                            All Jobs
                        </Button>
                        <Button
                            border="none"
                            visual={'secondary'}
                            css={
                                activeButton === 'favourites'
                                    ? activeButtonCss
                                    : ''
                            }
                            onClick={() => {
                                setAcutalData(favourites);
                                setActiveButton('favourites');
                            }}
                        >
                            My Favourites ({favourites.length})
                        </Button>
                    </HStack>
                </Box>
            </Box>

            <Box bg={'tertiary.50'} py="100px" minH="360px">
                {isLoading && (
                    <Box textAlign={'center'}>
                        <ProgressCircleRoot value={null}>
                            <ProgressCircleRing
                                cap="round"
                                color={'primary.700'}
                            />
                        </ProgressCircleRoot>
                    </Box>
                )}
                {actualData && (
                    <Box
                        display={'flex'}
                        flexWrap={'wrap'}
                        gap={'20px'}
                        justifyContent={'center'}
                    >
                        {' '}
                        {actualData
                            .slice(firstIndex, lastIndex)
                            .map((data: any, index: number) => {
                                return (
                                    <Fragment key={index}>
                                        <JobListCard
                                            title={data.job_title || data.title}
                                            description={data.description}
                                            locationName={
                                                data.location ||
                                                data.locationName
                                            }
                                            employmentType={
                                                data.remote ||
                                                data.employmentType
                                            }
                                            company={data.company}
                                            status={
                                                data.posted_at || data.status
                                            }
                                            id={data.job_id || data.id}
                                        ></JobListCard>
                                    </Fragment>
                                );
                            })}
                    </Box>
                )}

                {actualData && (
                    <Box display={'flex'} justifyContent={'center'} my="20px">
                        {' '}
                        <Pagination
                            isNext={isNext}
                            isPrevious={isPrevious}
                            handleNextClick={handleNextClick}
                            handlePreviousClick={handePreviousClick}
                        ></Pagination>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default JobListing;
