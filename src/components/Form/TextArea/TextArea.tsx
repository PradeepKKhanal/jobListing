import { Textarea as ChakraTextArea } from '@chakra-ui/react';

import { useFormContext, useController } from 'react-hook-form';

import { textAreaProps } from './textArea.types';
import { CommonFormFieldWrapper } from '../Wrapper/CommonFormFieldWrapper';

export const TextArea = ({
    name,
    label,
    placeholder,
    required,
    helperText,
    disabled,
}: textAreaProps) => {
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({ name, control });

    const { onChange } = field;
    return (
        <CommonFormFieldWrapper
            label={label}
            required={required}
            error={error}
            helperText={helperText}
            disabled={disabled}
        >
            <ChakraTextArea
                placeholder={placeholder}
                onChange={onChange}
                h="130px"
                _focus={{
                    border: '2px solid {colors.primary.600}',
                    outline: 'none',
                }}
            />
        </CommonFormFieldWrapper>
    );
};
