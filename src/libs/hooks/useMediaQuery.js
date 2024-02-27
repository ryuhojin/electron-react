import { useCallback, useState } from "react"

const useMediaQuery = (query) => {

    const [matches, setMatches] = useState(false);

    const handleMediaQueryChange = useCallback((mediaQueryList) => {
        setMatches(mediaQueryList.matches);
    }, []);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        }
    }, [query, handleMediaQueryChange]);

    return matches;
}

export default useMediaQuery;