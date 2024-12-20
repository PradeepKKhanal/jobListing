import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { system } from './theme/index.ts';

import './index.css';
import App from './App.tsx';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={system}>
                <App />
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>
);
