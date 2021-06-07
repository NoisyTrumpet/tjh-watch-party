import { Box, Text } from "@chakra-ui/layout";
import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bands = ({ bands }) => {
  return (
    <Box w={`100vw`}>
      <Box bgColor="black" p={2}>
        <Text
          color="#fff"
          textAlign="center"
          as="h2"
          maxW={`300px`}
          mx={`auto`}
          textTransform="uppercase"
          fontSize={[`2xl`, `3xl`, `5xl`]}
          fontWeight={"900"}
        >
          Post Fight Concert Starring
        </Text>
      </Box>
      {bands.nodes.map((band) => (
        <GatsbyImage
          image={getImage(band.largeGraphic)}
          alt={band.name}
          style={{ maxWidth: `100vw` }}
        />
      ))}
    </Box>
    // <Box my={4}>
    //   <Text
    //     textAlign="center"
    //     letterSpacing="widest"
    //     fontSize={[`xl`, `2xl`, `4xl`]}
    //     textTransform={`uppercase`}
    //     color={`primary`}
    //     w={"98%"}
    //     mx={"auto"}
    //   >
    //     With Musical Performances By:
    //   </Text>
    //   <Container>
    //     {bands.nodes.map((band) => (
    //       <Grid
    //         display={`grid`}
    //         placeItems={`center`}
    //         templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
    //       >

    //         <Box display={`grid`} px={[4, 8, 12]}>
    //           <Text
    //             letterSpacing="widest"
    //             fontSize={`3xl`}
    //             textTransform={`uppercase`}
    //             textShadow={`1px 1px 2px rgba(0,0,0,0.5)`}
    //             color={`primary`}
    //           >
    //             {band.name}
    //           </Text>
    //           <Text letterSpacing="wide">{band.headshot.description}</Text>
    //         </Box>

    //         <Box>
    //           <GatsbyImage
    //             image={getImage(band.headshot)}
    //             alt={band.name}
    //             style={{ maxWidth: `250px` }}
    //           />
    //         </Box>
    //       </Grid>
    //     ))}
    //   </Container>
    // </Box>
  );
};

export default Bands;
