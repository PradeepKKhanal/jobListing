import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@chakra-ui/react';

import { modalProps } from './modal.types';

export const Modal = ({
    size,
    placement,
    open,
    setOpen,
    scrollBehavior,
    motionPreset,
    children,
    actionButtonText,
    handleAction,
    handleClose,
    title,
}: modalProps) => {
    return (
        <>
            <DialogRoot
                size={size}
                motionPreset={motionPreset}
                scrollBehavior={scrollBehavior}
                placement={placement}
                open={open}
                onOpenChange={(e) => {
                    setOpen(e.open);
                    handleClose();
                }}
            >
                <DialogContent height={'auto'}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <DialogBody>{children}</DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button visual="secondary">Cancel</Button>
                        </DialogActionTrigger>
                        <Button onClick={() => handleAction()}>
                            {actionButtonText}
                        </Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </DialogRoot>
        </>
    );
};
