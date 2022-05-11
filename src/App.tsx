import { Flex } from '@chakra-ui/react';
import { RandomAnime } from 'components/RandomAnime';
import { WatchList } from 'components/WatchList';

function App() {
  return (
    <Flex height="100vh" p="2">
      <RandomAnime />
      <WatchList />
    </Flex>
  );
}

export default App;
