import type { RecipeVariantProps } from '@chakra-ui/react';
import { buttonRecipe } from '../recipes/button.recipes';

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export interface ButtonProps
    extends React.PropsWithChildren<ButtonVariantProps> {}

//   "use client"

import { chakra, useRecipe } from '@chakra-ui/react';

export const Button = (props: ButtonProps) => {
    const { visual, size, ...restProps } = props;

    const recipe = useRecipe({ key: 'button' });
    const styles = recipe({ visual, size });

    return <chakra.button css={styles} {...restProps} />;
};
