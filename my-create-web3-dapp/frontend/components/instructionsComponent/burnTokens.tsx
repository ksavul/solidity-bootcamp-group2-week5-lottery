import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

function BurnTokens() {
  const [accountIndex, setAccountIndex] = useState<number | string>("");
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [lt0Balance, setLt0Balance] = useState<number | null>(null);
  const [burnAmount, setBurnAmount] = useState<number | string>("");
  const [allowanceTxHash, setAllowanceTxHash] = useState<string | null>(null);
  const [burnTxHash, setBurnTxHash] = useState<string | null>(null);
  const [ethBalance, setEthBalance] = useState<number | null>(null);
  const [showBalances, setShowBalances] = useState(false);

  const handleAccountInput = async () => {
    // Simulate API call
    setAccountAddress(`0x123${accountIndex}`);
    setLt0Balance(Math.random() * 1000);
  };

  const handleBurnTokens = async () => {
    // Simulate API calls
    setAllowanceTxHash("0x123ABC");
    setBurnTxHash("0x456DEF");
    setEthBalance(Math.random() * 5);
    setShowBalances(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Burn Tokens</Typography>
      <TextField
        fullWidth
        label="What account (index) to use?"
        variant="outlined"
        type="number"
        value={accountIndex}
        onChange={(e) => setAccountIndex(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAccountInput}>
        Enter
      </Button>

      {accountAddress && lt0Balance !== null && (
        <Typography variant="h6">
          The account of address {accountAddress} has {lt0Balance} LT0
        </Typography>
      )}

      {lt0Balance !== null && (
        <>
          <TextField
            fullWidth
            label="Burn how many tokens?"
            variant="outlined"
            type="number"
            value={burnAmount}
            onChange={(e) => setBurnAmount(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button onClick={() => setBurnAmount(lt0Balance || "")}>
                  Max
                </Button>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleBurnTokens}
          >
            Enter
          </Button>
        </>
      )}

      {allowanceTxHash && (
        <Typography variant="h6" align="center">
          Allowance confirmed
        </Typography>
      )}

      {allowanceTxHash && (
        <Typography variant="h6" align="center">
          Transaction Hash: {allowanceTxHash}
        </Typography>
      )}

      {burnTxHash && (
        <Typography variant="h6" align="center">
          Burn confirmed
        </Typography>
      )}

      {burnTxHash && (
        <Typography variant="h6" align="center">
          Transaction Hash: {burnTxHash}
        </Typography>
      )}

      {showBalances && ethBalance !== null && (
        <Typography variant="h6">
          The account of address {accountAddress} has {ethBalance} ETH
        </Typography>
      )}

      {showBalances && lt0Balance !== null && (
        <Typography variant="h6">
          The account of address {accountAddress} has {lt0Balance} LT0
        </Typography>
      )}
    </Box>
  );
}

export default BurnTokens;
