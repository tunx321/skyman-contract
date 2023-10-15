import { useState } from "react";
import SkymanABI from "./Skyman.json"
import { Box, Button, Flex, Input, Text} from '@chakra-ui/react';
const ethers = require("ethers");

const skymanAddress = "0x45c8C9Fb241F31F444CDd16Ebed460D3e3331326";

const MainMint = ({accounts, setAccounts}) =>{
    const isConnected = Boolean(accounts[0])
    const [uri, setUri] = useState('')


    async function handleMint(){

    
        if (window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new ethers.Contract(
                skymanAddress,
                SkymanABI.abi,
                signer,
            )

            try {
                console.log(accounts[0], {uri})
                const options = {value: "50000000000000000"}
                const response = await contract.payToMint(accounts[0], {uri}, options)
                console.log("response: ", response)
                
            } catch (error) {
                console.log("erorr: ", error)
            }
        }
    }
    return (

        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
            <div>
                <Text fontSize="48px" textShadow="0 5px #000000">Skyman NFT</Text>
                <Text
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
                
                >It's 2023. Almat Tungatov Alizhan and Aiym</Text>
            </div>
            {isConnected ? (
                <Flex className="create" align="center" justify="cetner">
                    <form>
                        <label>URI: </label>
                        <Input
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        paddingTop="10px"
                        type="text" 
                        required 
                        value={uri} 
                        onChange={(e)=> setUri(e.target.value)}/>
                    </form> 
                    <Button 
                     backgroundColor="#D6517D" 
                     borderRadius="5px"
                     boxShadow="0px 2px 2px 1px #0F0F0F"
                     color="white"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     marginTop="10px"
                     onClick={handleMint}>Mint</Button>
                
                </Flex>
            ):(
                <p>You must be connected to Mint.</p>
            )}
            </Box>
        </Flex>
    )

}

export default MainMint;