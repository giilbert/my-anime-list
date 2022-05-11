import {
  CloseButton,
  HStack,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import type { Anime } from 'utils/types/Anime';
import * as store from 'utils/store';

export const Card: React.FC<{
  anime: Anime;
}> = ({ anime }) => {
  return (
    <HStack borderWidth="1px" borderRadius="lg" px="4" py="2" mb="2">
      <Text size="md">{anime.title}</Text>

      <Spacer />

      <IconButton aria-label="Remove from watchlist" colorScheme="red">
        <CloseButton
          onClick={() => {
            store.removeOne(anime.title);
          }}
        />
      </IconButton>
    </HStack>
  );
};
