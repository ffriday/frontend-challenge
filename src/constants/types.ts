export enum AppRoutes {
  root = '/',
  favorite = 'favorite',
}

export enum ENV {
  apiHeaderName = 'x-api-key',
  apiKey = 'live_Wo3mOGQAakeKCu9YUC80zCogh5lRFTupN38l0t63gCUDuY66U56sdREcqAdeWqTe',
  apiEndpoint = 'https://api.thecatapi.com/v1/images/search',
  LSKey = 'favoriteCats',
}

export enum SearchParams {
  page = 'page',
  limit = 'limit',
}

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
  favourite: object;
};

export type CatContextProps = {
  cats: Cat[];
  addCat: (newCat: Cat) => void;
  removeCat: (newCat: Cat) => void;
};
