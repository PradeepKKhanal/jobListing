import { toaster } from '@/components/ui/toaster';
interface toastArgs {
    type: 'info' | 'error' | 'warning' | 'success';
    description: string;
    duration?: number;
}

export const createToast = ({ type, description, duration }: toastArgs) => {
    console.log(type);
    toaster.create({
        description: description,
        type: type,
        duration: duration || 3000,
    });
};
