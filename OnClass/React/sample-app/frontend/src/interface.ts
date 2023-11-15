

export const Base_Url =  'https://hacker-news.firebaseio.com/v0'

export type CardItem = {
    by:string
    id:number
    time:number
    title:string
    url:string
}

export type Cards = CardItem[]

export type HandleCategoryContextType = {
    category: string
    handleCategory: (param: string) => void
}