import { formFieldOrientationEnum } from '@/enums/formFieldOrientation.enums';

export interface inputProps {
    label?: string;
    name: string;
    helperText?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    orientation?: (typeof formFieldOrientationEnum)[keyof typeof formFieldOrientationEnum];
}
