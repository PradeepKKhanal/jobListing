import {
    Box,
    Heading,
    Text,
    HStack,
    VStack,
    Separator,
    Badge,
    Stack,
    Button,
} from '@chakra-ui/react';
import { LuBuilding2 } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';
import { LuBriefcase } from 'react-icons/lu';
import { GoGlobe } from 'react-icons/go';
import { useGetJob } from '../services/getJob';

import {
    ProgressCircleRing,
    ProgressCircleRoot,
} from '@/components/ui/progress-circle';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { JobApplyForm } from './JobApplyForm';

const JobDetails = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetJob(id as string);
    return (
        <>
            <JobApplyForm open={open} setOpen={setOpen}></JobApplyForm>
            <Box
                minH={'100vh'}
                bg={'primary.50'}
                border={'1px solid {colors.primary.50}'}
            >
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

                {data && (
                    <Box
                        maxW={['100%', '90%', '80%', '70%']}
                        bg={'white'}
                        margin={'auto'}
                        my={'50px'}
                        p={'20px'}
                        boxShadow={'0 0  2px 2px {colors.primary.100}'}
                        borderRadius={'2px'}
                        py={'20px'}
                    >
                        <Box mb="20px">
                            <Heading
                                fontSize={[
                                    'body',
                                    'smallHeading',
                                    'mediumHeading',
                                ]}
                                fontWeight={'700'}
                                fontFamily={'sansSerif'}
                                mb="10px"
                            >
                                {' '}
                                {data?.job_info?.title}
                            </Heading>
                            <Stack
                                flexDirection={['column', 'column', 'row']}
                                gap={['10px', '10px', '15px']}
                            >
                                <HStack
                                    color="tertiary.500"
                                    fontSize={[
                                        'smallParagraph',
                                        'smallParagraph',
                                        'body',
                                    ]}
                                >
                                    <LuBuilding2 />
                                    {data?.company_info?.name}
                                </HStack>
                                <HStack
                                    color="tertiary.500"
                                    fontSize={[
                                        'smallParagraph',
                                        'smallParagraph',
                                        'body',
                                    ]}
                                >
                                    <IoLocationOutline />
                                    {data?.job_info?.location}
                                </HStack>
                                <HStack
                                    color="tertiary.500"
                                    fontSize={[
                                        'smallParagraph',
                                        'smallParagraph',
                                        'body',
                                    ]}
                                >
                                    <FaRegClock />
                                    Valid upto:{' '}
                                    {`${new Date(data?.job_info?.expire_at).toDateString()}`}
                                </HStack>
                            </Stack>
                        </Box>
                        <Separator />

                        <Box color={'tertiary.700'} my="20px">
                            <Text
                                fontSize={'smallHeading'}
                                fontWeight={'bold'}
                                pb="20px"
                            >
                                Overview
                            </Text>
                            <Box>
                                <VStack alignItems={'flexStart'} gap="20px">
                                    <HStack>
                                        <LuBriefcase />
                                        <VStack
                                            alignItems={'flexStart'}
                                            gap="1px"
                                        >
                                            <Text
                                                fontSize={'xs'}
                                                fontWeight={'medium'}
                                                color={'tertiary.500'}
                                            >
                                                Employment Type
                                            </Text>
                                            <Text
                                                fontWeight={'bold'}
                                                lineHeight={'14px'}
                                            >
                                                {
                                                    data?.job_info
                                                        .employment_status
                                                }
                                            </Text>
                                        </VStack>
                                    </HStack>

                                    <HStack>
                                        <GoGlobe />
                                        <VStack
                                            alignItems={'flexStart'}
                                            gap="1px"
                                        >
                                            <Text
                                                fontSize={'xs'}
                                                fontWeight={'medium'}
                                                color={'tertiary.500'}
                                            >
                                                Work Location
                                            </Text>
                                            <Text
                                                fontWeight={'bold'}
                                                lineHeight={'14px'}
                                            >
                                                {data?.job_info
                                                    ?.is_remote_allowed
                                                    ? 'Remote'
                                                    : 'On-site'}
                                            </Text>
                                        </VStack>
                                    </HStack>

                                    <HStack>
                                        <LuBriefcase />
                                        <VStack
                                            alignItems={'flexStart'}
                                            gap="1px"
                                        >
                                            <Text
                                                fontSize={'xs'}
                                                fontWeight={'medium'}
                                                color={'tertiary.500'}
                                            >
                                                Company Size
                                            </Text>
                                            <Text
                                                fontWeight={'bold'}
                                                lineHeight={'14px'}
                                            >
                                                {
                                                    data?.company_info
                                                        ?.staff_count
                                                }
                                            </Text>
                                        </VStack>
                                    </HStack>
                                    <HStack>
                                        <LuBriefcase />
                                        <VStack
                                            alignItems={'flexStart'}
                                            gap="1px"
                                        >
                                            <Text
                                                fontSize={'xs'}
                                                fontWeight={'medium'}
                                                color={'tertiary.500'}
                                            >
                                                Salary Range
                                            </Text>
                                            {data?.salary_info ? (
                                                <Text
                                                    fontWeight={'bold'}
                                                    lineHeight={'14px'}
                                                >
                                                    {'$' +
                                                        data?.salary_info
                                                            ?.min_salary +
                                                        ' - ' +
                                                        '$' +
                                                        data?.salary_info
                                                            ?.min_salary}
                                                </Text>
                                            ) : (
                                                <Text
                                                    fontWeight={'bold'}
                                                    lineHeight={'14px'}
                                                >
                                                    {'$1400 - $1600'}
                                                </Text>
                                            )}
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </Box>
                            <Box mt="20px">
                                <Text fontWeight={'600'}>Required Skills</Text>
                                <Stack direction={'row'} my={'5px'}>
                                    <Badge
                                        bg={'primary.100'}
                                        color={'primary.800'}
                                    >
                                        Html
                                    </Badge>
                                    <Badge
                                        bg={'primary.100'}
                                        color={'primary.800'}
                                    >
                                        Css
                                    </Badge>
                                    <Badge
                                        bg={'primary.100'}
                                        color={'primary.800'}
                                    >
                                        Jss
                                    </Badge>
                                    <Badge
                                        bg={'primary.100'}
                                        color={'primary.800'}
                                    >
                                        Node
                                    </Badge>
                                    <Badge
                                        bg={'primary.100'}
                                        color={'primary.800'}
                                    >
                                        React
                                    </Badge>
                                </Stack>
                            </Box>
                        </Box>

                        <Separator />

                        <Box>
                            <Heading
                                fontFamily={'sansSerif'}
                                color={'tertiary.700'}
                                my="20px"
                                fontSize={'smallHeading'}
                                fontWeight={'bold'}
                            >
                                Description
                            </Heading>
                            <Text fontSize={'sm'}>
                                {data?.job_info?.description?.slice(0, 1000) +
                                    'lorem.'}
                            </Text>
                        </Box>
                        <Box
                            mt="50px"
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Button>
                                <Link to={'/'}>Go Back</Link>{' '}
                            </Button>
                            <Button
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                Apply Now
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default JobDetails;
