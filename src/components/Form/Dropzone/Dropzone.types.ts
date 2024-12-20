import { formFieldOrientationEnum } from '@/enums/formFieldOrientation.enums';

import { FileUploadRootProps } from '@chakra-ui/react';

export interface DropzoneProps extends FileUploadRootProps {
    label?: string;
    name: string;
    helperText?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    orientation?: (typeof formFieldOrientationEnum)[keyof typeof formFieldOrientationEnum];
    description?: string;
}
