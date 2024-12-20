import { Badge, Box, Card, HStack, Text } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { CiBookmarkPlus } from 'react-icons/ci';
import { CiBookmarkMinus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { jobCardProps } from '../types/jobCardProps';

import { jobFavouriteStore } from '@/store/store';
import { createToast } from '@/utils/toast';

const JobListCard = ({
    title,
    locationName,
    employmentType,
    status,
    company,
    id,
}: jobCardProps) => {
    const { favourites, appendFavourites, removeFavourites } =
        jobFavouriteStore();

    const alreadyFavourite = !!favourites?.find(
        (favourite) => favourite.id === id
    );

    return (
        <Card.Root
            bg="white"
            w="450px"
            // h="150px"
            borderRadius={'5px'}
            boxShadow={'0 0 5px 5px {colors.primary.100}'}
        >
            <Card.Body>
                <Card.Title display={'flex'} justifyContent={'space-between'}>
                    {title}

                    {alreadyFavourite ? (
                        <Box
                            fontSize={'xl'}
                            color={'danger.800'}
                            cursor="pointer"
                            onClick={() => {
                                removeFavourites(id);
                                createToast({
                                    type: 'warning',
                                    description:
                                        'Job is removed from favourite',
                                });
                            }}
                        >
                            <CiBookmarkMinus />
                        </Box>
                    ) : (
                        <Box
                            fontSize={'xl'}
                            color={'primary.800'}
                            cursor="pointer"
                            onClick={() => {
                                appendFavourites({
                                    title,
                                    locationName,
                                    employmentType,
                                    status,
                                    company,
                                    id,
                                });
                                createToast({
                                    type: 'success',
                                    description: 'Job is added to favourite',
                                });
                            }}
                        >
                            <CiBookmarkPlus />
                        </Box>
                    )}
                </Card.Title>

                <Card.Description
                    fontSize={'sm'}
                    color={'black.400'}
                    mt={'10px'}
                >
                    {'Pleas view details for full dob description'}
                </Card.Description>
                <HStack mt="14px">
                    <Badge
                        fontSize={'xs'}
                        color={'black.400'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'1px'}
                        fontWeight={'light'}
                    >
                        <IoLocationOutline />
                        {locationName}
                    </Badge>
                    <Badge
                        fontSize={'xs'}
                        color={'black.400'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'1px'}
                        fontWeight={'light'}
                    >
                        <LiaSuitcaseSolid />
                        {employmentType || 'Remote'}
                    </Badge>
                    <Badge
                        fontSize={'xs'}
                        color={'black.400'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'1px'}
                        fontWeight={'light'}
                    >
                        <IoMdTime />
                        {status || 'Inactive'}
                    </Badge>
                </HStack>
            </Card.Body>

            <Card.Footer
                // display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Text color={'primary.700'}>{company}</Text>
                <Button
                    visual={'secondary'}
                    size={'sm'}
                    fontSize={'xs'}
                    border={'none'}
                >
                    <Link to={`/${id}`}>View Details</Link>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
};

export default JobListCard;
