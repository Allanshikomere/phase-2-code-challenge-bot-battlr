import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
  } from "@chakra-ui/react";
  // import _ from "lodash";
  import PropTypes from 'prop-types'
  function BotCollection({botData,isLoading,onEnlist}) {
   
  
    return (
      <>  
        <Heading size="2xl" textAlign={'center'}>BotCollection</Heading>
      <SimpleGrid
        as="div"
        spacing={4}
        minChildWidth="400px"
        p={"20px"}
        height="minmax(100vh, auto)"
      >
  
        {isLoading ? (
          <Flex
            justify={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"10px"}
            h={"80vh"}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.100" 
              color="teal.500" 
              size="xl"
              mx="auto" 
              mt="4" 
            />
            <Text>Your data will be here shortly..</Text>
          </Flex>
        ) : (
          botData.map((data, index) => {
            return (
              <Card
      boxShadow="dark-lg" // Change the boxShadow to "dark-lg" for a darker shadow
      borderTop="4px solid #3182CE"
      p="5" // Reduce the padding
      rounded="lg"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      key={index}
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.5s ease' }} // Add a hover effect
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "40%", sm: "200px" }}
        src={data.avatar_url}
        alt={data.name}
      />

      <Stack>
        <CardBody>
          <Heading textTransform="uppercase" size="md">
            Name: {data.name}
          </Heading>
          <Heading textTransform="lowercase" py="2" size="sm">
            Bot class: {data.bot_class}
          </Heading>
          <Text>Identification: {data.id}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="green"
            onClick={() => onEnlist(data.id)}
          >
            Enlist
          </Button>
        </CardFooter>
      </Stack>
    </Card>
            );
          })
        )}
      </SimpleGrid>
      </>
    );
  }
  
  BotCollection.propTypes = {
    botData: PropTypes.array,
    isLoading: PropTypes.bool,
    onEnlist: PropTypes.func,
  };
  export default BotCollection;