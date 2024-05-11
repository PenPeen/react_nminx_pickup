import { useState } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

type MEMBER = {
  name: string;
  age: number;
  image: string;
};

const members: MEMBER[] = [
  {
    name: 'LILY',
    age: 21,
    image: 'lily.jpeg',
  },
  {
    name: 'HAEWON',
    age: 21,
    image: 'haewon.jpeg',
  },
  {
    name: 'SULLYOON',
    age: 20,
    image: 'sullyoon.jpeg',
  },
  {
    name: 'BAE',
    age: 19,
    image: 'bae.jpeg',
  },
  {
    name: 'JIWOO',
    age: 19,
    image: 'jiwoo.webp',
  },
  {
    name: 'KYUJIN',
    age: 17,
    image: 'kyujin.jpeg',
  },
];

const Nminx: React.FC = () => {
  const [member, setMember] = useState<MEMBER>(members[0]);
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.500');

  const changeMember = () => {
    setMember(members[Math.floor(Math.random() * members.length)]);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      p={5}
      bg={bgColor}
      minH="100vh"
    >
      <IconButton
        aria-label="Toggle theme"
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
        mb={4}
      />
      <Text fontSize="2xl" fontWeight="bold" mb={4} color={textColor}>
        NMINX PickUp Member
      </Text>
      <Box boxShadow="xl" p="6" rounded="md" bg="white" width="500px">
        <Text fontSize="lg" fontWeight="semibold" color={textColor}>
          {member.name}
        </Text>
        <Text color={textColor}>{`Age: ${member.age}`}</Text>
        <AspectRatio ratio={3 / 4}>
          <Image
            src={member.image}
            alt="memberImage"
            width="100%"
            maxHeight="auto"
            objectFit="cover"
          />
        </AspectRatio>
        <Button colorScheme="teal" onClick={changeMember} mt={4}>
          Change Member
        </Button>
      </Box>
    </Flex>
  );
};

export default Nminx;
