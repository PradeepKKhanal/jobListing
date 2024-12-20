import { formFieldOrientationEnum } from '@/enums/formFieldOrientation.enums';
import { FieldError } from 'react-hook-form';
export interface commonFormFieldWrapperProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    error?: FieldError;
    required?: boolean;
    orientation?: (typeof formFieldOrientationEnum)[keyof typeof formFieldOrientationEnum];
    children: React.ReactNode;
    disabled?: boolean;
}
