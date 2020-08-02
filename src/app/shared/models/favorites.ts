export interface Favorites {
    userId: number;
    favoriteMovies: FavoriteMovie[];
  }
  
  export interface FavoriteMovie {
    id: number;
    title: string;
    posterUrl: string;
    releaseDate: Date;
  }