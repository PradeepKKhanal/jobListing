import { Input as ChakraInput } from '@chakra-ui/react';

import { inputProps } from './input.types';
import { CommonFormFieldWrapper } from '../Wrapper/CommonFormFieldWrapper';
import { useFormContext, useController } from 'react-hook-form';

export const Input = ({
    name,
    label,
    orientation,
    required,
    helperText,
    placeholder,
}: inputProps) => {
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    const { onChange } = field;

    return (
        <CommonFormFieldWrapper
            label={label}
            error={error}
            required={required}
            orientation={orientation}
            helperText={helperText}
        >
            <ChakraInput
                placeholder={placeholder}
                onChange={onChange}
                _focus={{
                    border: '2px solid {colors.primary.600}',
                    outline: 'none',
                }}
            />
        </CommonFormFieldWrapper>
    );
};
