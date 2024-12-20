import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
    base: {
        borderRadius: '10px',
        color: 'black',
        fontWeight: '400',
        fontStyle: 'normal',
    },
    variants: {
        visual: {
            primary: {
                background: 'primary.700',
                border: '1px solid white',
                color: 'white',
                _hover: {
                    color: 'white',
                    background: 'primary.800',
                    borderColor: 'white',
                    _disabled: { color: 'white', background: 'primary.200' },
                },
            },

            secondary: {
                background: 'primary.50',
                border: '1px solid ',
                borderColor: 'primary.700',
                color: 'primary.700',
                _hover: {
                    color: 'primary.700',
                    background: 'primary.100',
                    borderColor: 'white',
                    _disabled: {
                        color: 'primary.800',
                        background: 'primary.50',
                        borderColor: 'primary.700',
                    },
                },
            },
            danger: {
                border: '1px solid',
                borderColor: 'danger.500',
                bg: 'danger.500',
                color: 'white',
                _disabled: {
                    _hover: {
                        bg: 'danger.500 !important',
                    },
                },
                _hover: {
                    color: 'white',
                    background: 'danger.600',
                    borderColor: 'danger.600',
                    _disabled: { color: 'white', background: 'danger.100' },
                },
            },
        },
        size: {
            xs: {
                fontSize: '12px',
                px: '15px',
                py: '5px',
                lineHeight: '10px',
            },
            sm: {
                fontSize: '14px',
                px: '12px',
                py: '8px',
                lineHeight: '20px',
            },
            md: {
                fontSize: '14px',
                px: '16px',
                py: '10px',
                lineHeight: '24px',
            },
            lg: {
                fontSize: '14px',
                px: '20px',
                py: '12px',
                lineHeight: '28px',
            },
        },
    },
    defaultVariants: {
        size: 'md',
        visual: 'primary',
    },
});
