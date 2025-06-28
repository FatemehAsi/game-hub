import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";

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
       <GridItem area="nav" p={4}>
        <NavBar/>
       </GridItem>
       <GridItem area="main" p={4}>
        Main
       </GridItem>
       <GridItem
           area="aside"
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