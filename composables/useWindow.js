export function useWindowUrl() {
    const route = useRoute();
    function createUrlQuery({ name, value }) {
        if (!import.meta.client) return "";
        const newUrl = new URL(`http://test.com${route.fullPath}`);
        newUrl.searchParams.set(name, value);
        return newUrl.search;
    }

    return { createUrlQuery };
}
