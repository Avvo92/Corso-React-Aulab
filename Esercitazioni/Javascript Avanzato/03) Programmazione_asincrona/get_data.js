export const get_data = async () => {
    try {
        const response = await fetch("assets/prodotti.json");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (e) {
        console.error("get_data:", e);
        return [];
    }
};
