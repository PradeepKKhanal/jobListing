import { z } from 'zod';

export const jobApplyFormSchema = z.object({
    fullName: z.string().nonempty('Full Name is required'),
    email: z.string().email('Invalid email address'),
    resume: z
        .custom((value) => {
            if (!value) {
                return true;
            }

            const { acceptedFiles } = value;
            if (!Array.isArray(acceptedFiles) || acceptedFiles.length === 0) {
                return false;
            }
            const allFilesValid = acceptedFiles.every((file) => {
                if (!(file instanceof File)) {
                    return false;
                }

                if (file.type !== 'application/pdf') {
                    return false;
                }

                if (file.size > 5 * 1024 * 1024) {
                    return false;
                }

                return true;
            });

            return allFilesValid;
        }, "Invalid file upload. Ensure it's a PDF and under 5MB.")
        .optional(),

    coverLetter: z.string().nonempty('Cover Letter is required'),
});

export type jobApplyFormType = z.infer<typeof jobApplyFormSchema>;
