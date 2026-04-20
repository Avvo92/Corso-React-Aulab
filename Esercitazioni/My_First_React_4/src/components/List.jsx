import { ListContext } from "./ListContext.jsx";
import ListItem from "./ListItem.jsx";

function ListRoot() {
    const items = ["Mario", "Piero", "Angelo"];

    return (
        <ul>
            {items.map((nome, index) => (
                <ListContext.Provider
                    key={`${nome}-${index}`}
                    value={{ items, nome, index }}
                >
                    <ListRoot.Item />
                </ListContext.Provider>
            ))}
        </ul>
    );
}

ListRoot.Item = ListItem;

export default ListRoot;
