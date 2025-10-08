# C2D Payment - Escrow

## What is the purpose of Escrow?
Escrow smart contract represents a contract used between a payer, being the end user, and a payee, being the application or the component that is performing a paid task.

Applied to Ocean Protocol new version of Compute-to-Data, Escrow smart contract facilitates the payment for new version of paid compute by locking the amount available in the contract for algorithm execution at each compute job creation.

## What can payer do with Escrow?
The `payer` flow looks like:
- payer deposits funds in payment token accepted by the `payee`
- payer authorizes `payee` by setting max amount, max process time for the service.

## What can payee do with Escrow?
The `payee` flow looks like:
- payer requests for service (such as `compute`) offchain
- payee computes the maximum amount and locks that amount in the Escrow contract
- payee performs the service
- payee takes the actual amount from the lock and releases back the remaining.

## Appendix
For more details regarding paid compute flow and how it is integrated with [Escrow contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/escrow/Escrow.sol), kindly consult [this dedicated section](../compute-to-data-v2.0/paid-compute-to-data-flow.md).