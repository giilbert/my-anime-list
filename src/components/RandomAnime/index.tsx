import { Button, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRandomAnime } from './useRandomAnime';

export const RandomAnime: React.FC = () => {
  const { anime, refetch } = useRandomAnime();

  return (
    <VStack>
      <Button onClick={() => refetch(true)} mb="2" colorScheme="green" px="8">
        <ArrowForwardIcon />
      </Button>

      <Image src={anime?.images.jpg.image_url} />

      <Heading fontSize="xl">{anime?.title}</Heading>
    </VStack>
  );
};
