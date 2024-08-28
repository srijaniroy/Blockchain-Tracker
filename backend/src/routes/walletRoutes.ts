import express from "express";
import { Request, Response } from "express";

import {
  getWallets,
  addWallet,
  updateMonitoring,
  getWalletTransactions,
  deleteAllTransactions,
} from "../controllers/walletController";

const router = express.Router();

router.get("/", getWallets);
router.post("/add", addWallet);
router.post("/monitor", updateMonitoring);
router.post("/transactions", getWalletTransactions);
router.get("/delete", deleteAllTransactions);
// router.get("/graph", drawGraph);

export default router;
