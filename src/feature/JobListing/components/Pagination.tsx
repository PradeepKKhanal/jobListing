// import {Button,HStack} from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';

import { HiChevronDoubleLeft } from 'react-icons/hi';
import { HiChevronDoubleRight } from 'react-icons/hi';

import { paginationProps } from '../types/paginationProps';

const Pagination = ({
    isPrevious,
    isNext,
    handlePreviousClick,
    handleNextClick,
}: paginationProps) => {
    return (
        <>
            {/* <HStack>
        <Button>Previous</Button>
        <Button>Next</Button>
    </HStack> */}
            <HStack>
                <Button
                    w="120px"
                    disabled={!isPrevious}
                    onClick={handlePreviousClick}
                >
                    <HiChevronDoubleLeft />
                    Previous
                </Button>
                <Button w="120px" disabled={!isNext} onClick={handleNextClick}>
                    Next
                    <HiChevronDoubleRight />
                </Button>
            </HStack>
        </>
    );
};

export default Pagination;
