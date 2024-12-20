import { DialogRootProps } from '@chakra-ui/react';

export interface modalProps extends DialogRootProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    actionButtonText: string;
    handleAction: () => void;
    handleClose: () => void;
    title: string;
}
