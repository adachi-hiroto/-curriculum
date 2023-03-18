import { useEffect, useState } from "react";

type Props = {
    by: string
    id: string
    time: number
    title: string
    url: string
};

export const Row = ({ title, fetchUrl }: Props) => {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setNews(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(news);

    return(
        <div className="Row"></div>
    );
}