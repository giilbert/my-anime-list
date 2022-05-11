import type { Anime } from 'utils/types/Anime';
import { EventEmitter } from 'events';
import { useEffect, useState } from 'react';
import { createStandaloneToast } from '@chakra-ui/react';

const emitter = new EventEmitter();

export const useStoreListener = () => {
  const [, refresh] = useState(false);

  useEffect(() => {
    const update = () => {
      refresh((c) => !c);
    };

    emitter.on('update', update);
    return () => {
      emitter.off('update', update);
    };
  }, []);
};

export const getAll = () => {
  return JSON.parse(localStorage.getItem('watchlist') || '[]') as Anime[];
};

const toast = createStandaloneToast();
export const addOne = (anime: Anime) => {
  const now = getAll();

  if (now.find((a) => anime.title === a.title)) {
    toast({
      title: 'The anime is already in your watchlist.',
      status: 'error',
      isClosable: true,
    });

    return;
  }

  localStorage.setItem('watchlist', JSON.stringify([...now, anime]));
  emitter.emit('update');
};
