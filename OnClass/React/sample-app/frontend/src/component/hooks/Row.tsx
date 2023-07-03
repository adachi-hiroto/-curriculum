import { Items } from "./interface";

export const ListItems = (props: Items) => {
    const { by, id, time, title, url } = props;
    return(
        <p>
            {by}{id}{title}{time}{url}
        </p>
    );
};