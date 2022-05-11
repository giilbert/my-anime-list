import { Center, Container } from '@chakra-ui/react';
import { RandomAnime } from 'components/RandomAnime';

function App() {
  return (
    <Center>
      <Container mt="8">
        <RandomAnime />
      </Container>
    </Center>
  );
}

export default App;
