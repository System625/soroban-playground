import express from "express";
import { asyncHandler, createHttpError } from "../middleware/errorHandler.js";

const router = express.Router();

router.post("/", asyncHandler(async (req, res, next) => {
  const { contractId, functionName, args } = req.body;

  if (!contractId || !functionName) {
    return next(createHttpError(400, "contractId and functionName are required"));
  }

  // Real implementation:
  // `soroban contract invoke --id {contractId} --source alice --network testnet -- {functionName} --name {args.name}`
  
  console.log(`Invoking ${contractId} -> ${functionName} with args:`, args);

  setTimeout(() => {
    // Simulated invocation response for the MVP
    res.json({
      success: true,
      output: args && args.name ? args.name : "Success",
      message: "Function invoked successfully"
    });
  }, 1000);
}));

export default router;
