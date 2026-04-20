import { useListContext } from "./ListContext.jsx";

export default function ListItem() {
    const { nome } = useListContext();

    return <li className="custom_list_item">{nome}</li>;
}
