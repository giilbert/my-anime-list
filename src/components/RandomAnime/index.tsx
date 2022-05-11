import { Box, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowForwardIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { useRandomAnime } from './useRandomAnime';
import * as store from 'utils/store';

export const RandomAnime: React.FC = () => {
  const { anime, refetch } = useRandomAnime();

  return (
    <Box width="500px">
      <HStack mb="2">
        <IconButton
          onClick={() => store.addOne(anime!)}
          colorScheme="orange"
          size="lg"
          aria-label="Add to watch list"
        >
          <PlusSquareIcon />
        </IconButton>

        <IconButton
          onClick={() => refetch(true)}
          colorScheme="green"
          size="lg"
          aria-label="Next"
        >
          <ArrowForwardIcon />
        </IconButton>

        <Text fontSize="xl">{anime?.title}</Text>
      </HStack>

      <Image src={anime?.images.jpg.large_image_url} width="300px" />
    </Box>
  );
};
