import { useEffect, useState } from 'react';
import type { Anime } from 'utils/types/Anime';

export const useRandomAnime = () => {
  const [anime, setAnime] = useState<Anime>();
  const [needsUpdate, refetch] = useState(true);

  useEffect(() => {
    if (!needsUpdate) return;
    (async () => {
      const res = await fetch('https://api.jikan.moe/v4/random/anime');
      const data = (await res.json()).data;

      setAnime(data);
      refetch(false);
    })();
  }, [needsUpdate]);

  return { anime, refetch };
};
