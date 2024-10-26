export function useStatic() {
    const config = useRuntimeConfig();

    const { status, data, error, refresh } = useFetch(
        () => `${config.public.apiPublic}/api/settings`,
        {
            pick: ["data"],
            key: "res-static-data",
        }
    );

    return { status, staticData: data, error, refresh };
}
