import { useEffect, useState } from "react"
import { Items } from "./interface"
import { ListItems } from "./Row"
import axios from "axios"

const url = 'https://hacker-news.firebaseio.com/v0'

// 非同期処理
export const NewsApp = () => {
    //取得した情報
    const [list, setList] = useState<Items[]>([]);

    useEffect(() => {
      axios.get<Items[]>(url).then((res) => {
        setList(res.data);
      })
    }, []);

    return (
        <div>
            {list.map(items => (
                <ListItems by={items.by} id={items.id} time={items.time} title={items.title} url={items.url}/>
            ))}
        </div>
    );
};