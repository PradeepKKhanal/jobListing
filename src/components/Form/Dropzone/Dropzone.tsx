import { CommonFormFieldWrapper } from '../Wrapper/CommonFormFieldWrapper';
import { useFormContext, useController } from 'react-hook-form';

import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
} from '@/components/ui/file-upload';
import { DropzoneProps } from './Dropzone.types';

export const Dropzone = ({
    name,
    label,
    orientation,
    required,
    helperText,
    placeholder,
    accept,
    description,
}: DropzoneProps) => {
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    const { onChange, value } = field;

    return (
        <CommonFormFieldWrapper
            label={label}
            error={error}
            required={required}
            orientation={orientation}
            helperText={helperText}
        >
            <FileUploadRoot
                alignItems="stretch"
                accept={accept}
                onFileChange={onChange}
            >
                <FileUploadDropzone
                    border={
                        error
                            ? '2px dashed red'
                            : '2px dashed {colors.tertiary.300}'
                    }
                    _active={{ border: '2px dashed {colors.primary.700}' }}
                    minH={'50px'}
                    label={placeholder}
                    description={description}
                />
                {value && <FileUploadList />}
            </FileUploadRoot>
        </CommonFormFieldWrapper>
    );
};
