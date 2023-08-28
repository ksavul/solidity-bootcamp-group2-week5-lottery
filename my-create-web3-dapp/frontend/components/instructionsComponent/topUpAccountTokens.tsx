import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, TextField, Box } from "@mui/material";

function TopUpAccountTokens() {
  const [account, setAccount] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [tokensBought, setTokensBought] = useState<number | null>(null);
  const [ethBalance, setEthBalance] = useState<number | null>(null);
  const [lt0Balance, setLt0Balance] = useState<number | null>(null);

  // Function to simulate API call when entering account
  const handleAccountInput = async () => {
    try {
      // Simulate API call to get account's ETH balance
      // Replace this with your actual API call
      const ethResponse = await new Promise<{ data: number }>((resolve) => {
        setTimeout(() => resolve({ data: Math.random() * 10 }), 1000);
      });

      // Update the state with the received ETH balance
      setEthBalance(ethResponse.data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  // Function to simulate API call when entering amount
  const handleAmountInput = async () => {
    try {
      // Simulate API call to get tokens bought and LT0 balance
      // Replace this with your actual API call
      const apiResponse = await new Promise<{ tokens: number; lt0: number }>(
        (resolve) => {
          setTimeout(
            () => resolve({ tokens: amount || 0, lt0: Math.random() * 100 }),
            1000
          );
        }
      );

      // Update the state with the received data
      setTokensBought(apiResponse.tokens);
      setLt0Balance(apiResponse.lt0);
    } catch (error) {
      console.error("Error fetching tokens and balances:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Top Up Account Tokens</Typography>
      <TextField
        fullWidth
        label="Account"
        variant="outlined"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAccountInput}>
        Enter
      </Button>
      {ethBalance !== null && (
        <Typography variant="h6">
          The account's address {account} has {ethBalance} ETH
        </Typography>
      )}
      <TextField
        fullWidth
        label="Amount"
        variant="outlined"
        type="number"
        value={amount || ""}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <Button variant="contained" color="primary" onClick={handleAmountInput}>
        Enter
      </Button>
      {tokensBought !== null && (
        <Typography variant="h6">Tokens bought: {tokensBought}</Typography>
      )}
      {ethBalance !== null && (
        <Typography variant="h6">ETH Balance: {ethBalance}</Typography>
      )}
      {lt0Balance !== null && (
        <Typography variant="h6">LT0 Balance: {lt0Balance}</Typography>
      )}
    </Box>
  );
}

export default TopUpAccountTokens;
