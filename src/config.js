const { _contractConfig: configOverrides } = window;

export const config = {
	maxSupply: 3999,
	purchaseLimit: 20,
	erc721Address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
	chainId: 5,
	validChainname: "Goerli Testnet",
	...configOverrides,
};
