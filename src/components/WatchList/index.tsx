import { Box, Heading, Text } from '@chakra-ui/react';
import * as store from 'utils/store';
import { Card } from './Card';

export const WatchList: React.FC = () => {
  store.useStoreListener();

  const data = store.getAll();

  return (
    <Box width="container.md">
      <Heading mb="2">Watch List</Heading>

      {data.length === 0 && (
        <Text>Click the + button to add something to your watch list!</Text>
      )}

      {data.map((anime) => (
        <Card anime={anime} />
      ))}
    </Box>
  );
};
