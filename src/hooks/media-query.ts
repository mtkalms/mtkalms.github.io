import { useEffect, useState } from "react";

function useMediaQuery(query: string, present: boolean = true) {
  const [queryMatches, setQueryMatches] = useState<boolean>(window.matchMedia(query).matches === present);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setQueryMatches(event.matches === present);
    
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    }
  }, [query, present]);
  
  return queryMatches;
}

const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: no-preference)', false);

export default useMediaQuery;
export { usePrefersReducedMotion }