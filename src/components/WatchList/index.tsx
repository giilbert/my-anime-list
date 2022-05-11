import { Box } from '@chakra-ui/react';
import * as store from 'utils/store';

export const WatchList: React.FC = () => {
  store.useStoreListener();

  return (
    <Box>
      {store.getAll().map((anime) => (
        <Box>{anime.title}</Box>
      ))}
    </Box>
  );
};
