import {
    createSystem,
    defineConfig,
    mergeConfigs,
    defaultConfig,
} from '@chakra-ui/react';
import { buttonRecipe } from './recipes/button.recipes';
import { THEME_COLORS_TOKEN } from './tokens/colors.tokens';
import { THEME_FONTS_TOKEN } from './tokens/fonts.tokens';
import { FONT_SIZE_TOKEN } from './tokens/fontSize.tokens';
import { FONT_WEIGHT_TOKEN } from './tokens/fontWeights.tokens';
import { THEME_COLORS_SEMANTIC_TOKEN } from './semantic_tokens/colors.semantic_tokens';
import { THEME_FONTS_SEMANTIC_TOKEN } from './semantic_tokens/fonts.semantic_tokens';
import { FONT_SIZE_SEMANTIC_TOKEN } from './semantic_tokens/fontSize.semantic_tokens';
import { FONT_WEIGHT_SEMANTIC_TOKEN } from './semantic_tokens/fontWeight.sematic_tokens';
import { globalCss } from './globalCss';

const config = defineConfig({
    globalCss: globalCss,
    theme: {
        tokens: {
            colors: THEME_COLORS_TOKEN,
            fonts: THEME_FONTS_TOKEN,
            fontSizes: FONT_SIZE_TOKEN,
            fontWeights: FONT_WEIGHT_TOKEN,
        },
        semanticTokens: {
            colors: THEME_COLORS_SEMANTIC_TOKEN,
            fonts: THEME_FONTS_SEMANTIC_TOKEN,
            fontSizes: FONT_SIZE_SEMANTIC_TOKEN,
            fontWeights: FONT_WEIGHT_SEMANTIC_TOKEN,
        },
        recipes: {
            button: buttonRecipe,
        },
    },
});

const customConfig = mergeConfigs(defaultConfig, config);
export const system = createSystem(customConfig);
