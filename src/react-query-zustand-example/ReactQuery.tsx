import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryHome } from './ReactQueryHome';

const queryClient = new QueryClient();

export const ReactQuery = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryHome />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
