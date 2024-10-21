export const useStatic = () => {
    const config = useRuntimeConfig()
    const { data: staticData, error, refresh } = useFetch(`${config.public.apiPublic}/api/settings`, {
        pick: ["data"],
        key: "static-data",
        server: true,
    });
    return { staticData, error, refresh };
};