export function useStatic() {
    const staticData = useState("state-static-data", () => null)
    return { staticData }
}
