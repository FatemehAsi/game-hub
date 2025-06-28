import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
const {toggleColorMode, colorMode} = useColorMode()

    return(
        <HStack>
            <Switch colorScheme={"green"} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text color={colorMode === 'dark' ? "white" : "black"}>Dark/Light</Text>
        </HStack>
    )
}

export default ColorModeSwitch;