import { useState } from "react";
import SkymanABI from "./Skyman.json"
const ethers = require("ethers");

const skymanAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const MainMint = ({accounts, setAccounts}) =>{
    const isConnected = Boolean(accounts[0])

    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(
                skymanAddress,
                SkymanABI.abi,
                signer,
            )

            try {
                const response = await contract.payToMint("")
                console.log("response: ", response)
                
            } catch (error) {
                console.log("erorr: ", error)
            }
        }
    }
    return (

        <div>
            <h1>Skyman NFT</h1>
            <p>It's 2023. Almat Alizhan and Aiym</p>
            {isConnected ? (
                <div>
                    <div>
                        <input type="text" placeholder="URI"/>
                    </div>
                    <button onClick={handleMint}>Mint</button>
                </div>
            ):(
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )

}

export default MainMint;