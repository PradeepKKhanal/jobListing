import { Modal } from '@/components/Modal';
import { jobApplyFormProps } from '../types/jobApplyFormPros.types';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    jobApplyFormSchema,
    jobApplyFormType,
} from '../schema/jobApplyFormSchema.schema';

import { createToast } from '@/utils/toast';
import { Input } from '@/components/Form/Input/Input';
import { TextArea } from '@/components/Form/TextArea/TextArea';
import { Dropzone } from '@/components/Form/Dropzone/Dropzone';

const defaultValues: jobApplyFormType = {
    fullName: '',
    email: '',
    resume: null,
    coverLetter: '',
};

export const JobApplyForm = ({ open, setOpen }: jobApplyFormProps) => {
    const methods = useForm<jobApplyFormType>({
        mode: 'onSubmit',
        resolver: zodResolver(jobApplyFormSchema),
        defaultValues,
    });

    const onSubmit = (data: jobApplyFormType) => {
        console.log('hello');
        console.log('Form submitted successfully:', data);
        createToast({
            type: 'success',
            description: 'Form submitted successfully',
        });
        reset(defaultValues);
    };
    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = methods;
    console.log(errors);
    const handleAction = handleSubmit(onSubmit);
    const handleClose = () => {
        reset(defaultValues);
    };
    return (
        <>
            <Modal
                size={'lg'}
                open={open}
                setOpen={setOpen}
                actionButtonText={isSubmitting ? 'Submitting' : 'Submit'}
                handleAction={handleAction}
                handleClose={handleClose}
                placement={'center'}
                title="Job Application"
            >
                <FormProvider {...methods}>
                    <Input name="fullName" label="Name" required={true}></Input>

                    <Input name="email" label="Email" required={true}></Input>
                    <TextArea
                        name="coverLetter"
                        label="CoverLetter"
                        required={true}
                    ></TextArea>
                    <Dropzone
                        name="resume"
                        label="Resume"
                        required={false}
                        description="Only .pdf file upto 5MB"
                        placeholder="Drag and drop here to upload"
                        accept={'application/pdf'}
                        minFileSize={5242880}
                    ></Dropzone>
                </FormProvider>
            </Modal>
        </>
    );
};
