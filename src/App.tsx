import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

function App() {
 return (
     <ChakraProvider>
      <Grid
          templateAreas={{
           base: `"nav" "main"`,        // حالت موبایل
           md: `"nav nav" "aside main"` // حالت تبلت/لپ‌تاپ
          }}
          gridTemplateRows={{ base: "50px 1fr", md: "50px 1fr" }}
          gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }}
          h="100vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
      >
       <GridItem area="nav" bg="tomato" p={4}>
        Nav
       </GridItem>
       <GridItem area="main" bg="blue.500" p={4}>
        Main
       </GridItem>
       <GridItem
           area="aside"
           bg="yellow.400"
           p={4}
           display={{ base: "none", md: "block" }}
       >
        Aside
       </GridItem>
      </Grid>
     </ChakraProvider>
 );
}

export default App;