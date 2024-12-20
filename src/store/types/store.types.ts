import { jobCardProps } from '@/feature/JobListing/types/jobCardProps';

export interface jobFavouriteStoreTypes {
    favourites: jobCardProps[];
    appendFavourites: (item: jobCardProps) => void;
    removeFavourites: (id: string) => void;
}
