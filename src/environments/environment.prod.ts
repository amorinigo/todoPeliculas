import { Params } from "@angular/router";


export const environment = { production: true };
export const url: string = 'https://api.themoviedb.org/3';

export const params: Params = {
  api_key: '9b4d5ebc3b73e91f4e05a59de0179a5d',
  language: 'es-ES'
}

export const style: object = {
  'font-weight': 'bold',
  'margin-bottom.px': '50'
};

export let showMainSlider: boolean = true;
export let page: number = 1;
