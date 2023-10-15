export const Base_Url =  'https://hacker-news.firebaseio.com/v0'

export interface Card{
    by:string
    id:number
    time:number
    title:string
    url:string
}


export interface Category {
    [key:string]:string
  }  