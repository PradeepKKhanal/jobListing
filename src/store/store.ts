import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { jobFavouriteStoreTypes } from './types/store.types';

export const jobFavouriteStore = create<jobFavouriteStoreTypes>()(
    persist(
        (set) => ({
            favourites: [],
            appendFavourites: (item) =>
                set((state) => ({
                    favourites: [...state.favourites, item],
                })),
            removeFavourites: (id) =>
                set((state) => {
                    return {
                        favourites: state.favourites.filter(
                            (favouriteItem) => favouriteItem.id != id
                        ),
                    };
                }),
        }),
        {
            name: 'favourite-storage',
        }
    )
);
