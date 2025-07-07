import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

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
        <GameGrid/>
       </GridItem>
       <GridItem
           area="aside"
           p={4}
           display={{ base: "none", md: "block" }}
       >
        <GenreList />
       </GridItem>
      </Grid>
     </ChakraProvider>
 );
}

export default App;