import cn from "classnames";

import { useState } from "react";
import { Button, Modal } from "./Primitives";
import {
	connectMetamaskMobile,
	getConnectorName,
	metaMaskConnector,
	usePriorityConnector,
	usePriorityIsActive,
	usePriorityWeb3React,
	walletConnectConnector,
	walletLinkConnector,
} from "./connectors";

import { ReactComponent as MetaMaskIcon } from "../assets/images/MetaMask.svg";
import { ReactComponent as WalletConnectIcon } from "../assets/images/WalletConnect.svg";
import { ReactComponent as WalletLinkIcon } from "../assets/images/WalletLink.svg";
import { config } from "../config";
import { isMobile } from "./utils";

const Wallets = [
	{ Icon: MetaMaskIcon, connector: metaMaskConnector },
	{ Icon: WalletConnectIcon, connector: walletConnectConnector },
	{ Icon: WalletLinkIcon, connector: walletLinkConnector },
];

const shortenAddress = (address) => {
	return address.substring(0, 5) + "..." + address.substring(38);
};

export function Web3Modal({ children, className, onClose, ...props }) {
	const priorityConnector = usePriorityConnector();
	const priorityIsActive = usePriorityIsActive();
	const priorityConnectorName = getConnectorName(priorityConnector);

	return (
		<Modal className='bg-base/80' onClose={onClose} {...props}>
			<div>
				<div className='p-8 flex flex-col gap-y-2 bg-base font-retro rounded-xl border border-textGreen'>
					{Wallets.map(({ Icon, connector }) => {
						const name = getConnectorName(connector);
						return (
							<div
								key={name}
								onClick={() => {
									priorityConnector.deactivate();
									const deactivateOnly =
										priorityIsActive && priorityConnectorName === name;
									if (!deactivateOnly) {
										if (name === "MetaMask" && !window.ethereum && isMobile())
											connectMetamaskMobile();
										else connector.activate(config.chainId).then(onClose);
									}
								}}
								className='w-60 py-2 px-4 text-gray-200 rounded border border-gray-400/40 bg-black/20 hover:text-textGreen hover:bg-black/40 hover:outline outline-1 hover:cursor-pointer flex items-center justify-between group'>
								<div className='flex flex-row items-center gap-x-4'>
									{name === priorityConnectorName && priorityIsActive && (
										<div className='w-[6px] h-[6px] rounded-full bg-green-400 group-hover:bg-red-400 transition-colors duration-200' />
									)}
									<p className='group-hover:block group-hover:animate-float-y hidden text-sm'>{`>>`}</p>
									<p>{name}</p>
								</div>
								<Icon className='text-white h-8 w-8' />
							</div>
						);
					})}
				</div>
			</div>
		</Modal>
	);
}

export function WalletButton({ children, className, ...props }) {
	const { account, active, ensNames } = usePriorityWeb3React();
	const [modalOpen, setModalOpen] = useState(false);

	const onClick = () => {
		setModalOpen(true);
		// if (!active) connector.activate(config.chainId);
		// else {
		//   navigator.clipboard.writeText(accounts[0]);
		//   alert('Address copied.', 'success');
		// }
	};

	return (
		<>
			{modalOpen && <Web3Modal onClose={() => setModalOpen(false)} />}
			{children ? (
				<button onClick={onClick} {...props} className={className}>
					{(active &&
						(ensNames?.[0] || (account && shortenAddress(account)))) ||
						children}
				</button>
			) : (
				<Button
					variant='fancy'
					onClick={onClick}
					className={cn(
						"!outline-none normal-case text-sm w-[124px]",
						className
					)}
					{...props}>
					{(active &&
						(ensNames?.[0] || (account && shortenAddress(account)))) ||
						"Connect Wallet"}
				</Button>
			)}
		</>
	);
}

export function ConnectMetamaskContainer() {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<WalletButton className='rounded-xl hover:scale-110 transition-all duration-200'>
				<img
					className='w-20 m-4 mb-5'
					src={require("../assets/images/metamask.png")}
				/>
			</WalletButton>
			<p className='mt-4'>Connect via Metamask</p>
		</div>
	);
}
