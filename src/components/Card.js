import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack  align="self-start" bg='white' borderRadius={10}>
      <Image src={imageSrc} borderRadius={10}/>
      <Heading p={3} size="md" color='black'>
        {title}
      </Heading>
      <Text  p={3} size="md" color='gray'>{description}</Text>
      <HStack>
        <Heading size="xs" p={3} color='black'>
          See More 
          <FontAwesomeIcon p={3} icon={faArrowRight} size="1x"  color='black' />
        </Heading>
      </HStack>
    </VStack>
  );
};

export default Card;
