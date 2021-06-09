import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";
import { PlaneTicket } from "../typechain";

import { TASK_MINT } from "./task-names";

task(TASK_MINT, "Mints a new Flight Token", async (_taskArgs, hre) => {
    const contract = (await hre.ethers.getContract("PlaneTicket"))

    const tx = await (await contract.mint(2)).wait()

    // eslint-disable-next-line no-console
    console.log(tx.transactionHash);
});
