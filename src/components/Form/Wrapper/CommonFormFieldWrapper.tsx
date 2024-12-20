import { Field } from '@/components/ui/field';
import { commonFormFieldWrapperProps } from './commonFormFieldWrapper.types';

const CommonFormFieldWrapper = ({
    children,
    helperText,
    error,
    label,
    orientation,
    required,
    disabled,
}: commonFormFieldWrapperProps) => {
    return (
        <Field
            label={label}
            errorText={error?.message}
            helperText={helperText}
            orientation={orientation}
            invalid={!!error}
            required={required}
            disabled={disabled}
            py={'10px'}
        >
            {children}
        </Field>
    );
};

export { CommonFormFieldWrapper };
