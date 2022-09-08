import React, { useState, useEffect } from "react";
import "./fighters.css";
import { useContracts, useParty } from "../hooks";
import { usePriorityIsActive, usePriorityProvider } from "../lib/connectors";

const CodeFighters = () => {
	const [healthOneWidth, setHealthOneWidth] = useState(100);
	const [healthTwoWidth, setHealthTwoWidth] = useState(100);
	const [energyOneWidth, setEnergyOneWidth] = useState(100);
	const [energyTwoWidth, setEnergyTwoWidth] = useState(100);
	const [movesetOne, setMovesetOne] = useState(null);
	const [movesetTwo, setMovesetTwo] = useState(null);
	const [fighterOne, setFighterOne] = useState({});
	const [fighterTwo, setFighterTwo] = useState({});
	const [match, setMatch] = useState({});
	const [matchHistory, setMatchHistory] = useState([
		1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
	]);
	const [counter, setCounter] = useState(0);

	const provider = usePriorityProvider();
	const { erc721, handleTxError, handleTx } = useContracts();
	const signer = provider?.getSigner();

	const fighter = {
		lowPunch: 10,
		lowKick: 11,
		midPunch: 12,
		midKick: 13,
		highPunch: 14,
		highKick: 15,
		energy: 50,
		health: 50,
		maxEnergy: 50,
		maxHealth: 50,
	};

	/*
	 * 0 - Low Punch
	 * 1 - Low Kick
	 * 2 - Mid Punch
	 * 3 - Mid Kick
	 * 4 - High Punch
	 * 5 - High Kick
	 * 6 - Energy
	 * 7 - Health
	 * 8 - Max Energy
	 * 9 - Max Health
	 */

	const processMoveset = async () => {
		setFighterOne(await erc721.getFighterData("237044278317171493047050"));
		setFighterTwo(await erc721.getFighterData("237044278317171493047050"));
		const match = await erc721.tournamentMatches(0, 0);
		setMatch(match);
		console.log(match);
		console.log(match.history.toString());
		setCounter(0);
		//setMatchHistory(await erc721.getMatchHistory(match.history.toString()));

		// Returns object with health energy and move damages
	};

	const nextRound = () => {
		let count = counter;

		const firstMovePower = count % 2 === 0 ? 10 : 11;
		const secondMovePower = count % 2 === 0 ? 11 : 10;
		const firstMoveEnergy = getEnergyCost(firstMovePower);
		const secondMoveEnergy = getEnergyCost(secondMovePower);

		const one = { ...fighterOne };
		const two = { ...fighterTwo };

		one.health = one.health - secondMovePower;
		one.energy = one.energy - firstMoveEnergy;
		two.health = two.health - firstMovePower;
		two.energy = two.energy - secondMoveEnergy;

		setFighterOne(one);
		setFighterTwo(two);
		console.log("Round", count);
		console.log(one);
		console.log(two);
		count++;

		setCounter(count);
	};

	const getEnergyCost = (power) => {
		return Math.floor(power + (power * 3000) / 10000);
	};

	/* useEffect(() => {
		processMoveset("237044278317171493047050");
	}, []); */

	return (
		<div className='w-full min-h-screen p-5 bg-gray-500 text-white/90'>
			<div></div>
			<div className='flex flex-col items-center justify-start w-10/12 h-screen mx-auto bg-arena bg-contain bg-no-repeat'>
				<div className='w-full flex flex-row items-center justify-between py-2 px-4'>
					<div className=' w-64 bg-gray-200 rounded-lg'>
						<div
							className={`bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg border-black border-2 w-[${healthOneWidth}%]`}>
							{" "}
							{fighterOne?.health?.toString()}
						</div>
					</div>
					<div className=' w-64 bg-gray-200 rounded-lg'>
						<div
							className={`bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg border-black border-2 w-[${healthTwoWidth}%]`}>
							{" "}
							{fighterTwo?.health?.toString()}
						</div>
					</div>
				</div>
				<div className='w-full flex flex-row items-center justify-between py-2 px-4'>
					<div className=' w-64 bg-gray-200 rounded-lg'>
						<div
							className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg border-black border-2 w-[${energyOneWidth}%]`}>
							{" "}
							{fighterOne?.energy?.toString()}
						</div>
					</div>
					<div className=' w-64 bg-gray-200 rounded-lg'>
						<div
							className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg border-black border-2 w-[${energyTwoWidth}%]`}>
							{" "}
							{fighterTwo?.energy?.toString()}
						</div>
					</div>
				</div>
				<div className='w-full flex flex-row items-end justify-between pt-10 pb-4 px-4'>
					<img
						src='https://toppng.com/uploads/preview/street-fighter-5-ryu-png-picture-library-download-11563064846sqqpk1fpyr.png'
						className='h-52 '
					/>
					<img
						src='https://toppng.com/uploads/preview/street-fighter-5-ryu-png-picture-library-download-11563064846sqqpk1fpyr.png'
						className='h-52 '
					/>
				</div>
				<div className='flex flex-row items-center gap-x-2'>
					<button
						className='p-4 bg-black rounded-lg'
						onClick={() => processMoveset()}>
						Call{" "}
					</button>
					<button
						className='p-4 bg-black rounded-lg'
						onClick={() => nextRound()}>
						Next round
					</button>
				</div>
			</div>{" "}
		</div>
	);
};

export default CodeFighters;
