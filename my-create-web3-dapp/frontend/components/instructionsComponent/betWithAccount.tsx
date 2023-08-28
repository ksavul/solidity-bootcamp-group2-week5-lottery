import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

function BetWithAccount() {
  const [accountIndex, setAccountIndex] = useState<number | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [lt0Balance, setLt0Balance] = useState<number | null>(null);
  const [betTimes, setBetTimes] = useState<number | null>(null);
  const [betEntered, setBetEntered] = useState(false); // New state variable

  const handleAccountInput = async () => {
    // Simulate API call to get account address and LT0 balance based on account index
    // Replace with actual API call
    setAccountAddress(`0x123${accountIndex}`);
    setLt0Balance(Math.random() * 1000);
  };

  const handleBetInput = async () => {
    // Simulate API call to place bets
    // Replace with actual API call
    console.log(`Placed ${betTimes} bets with account ${accountAddress}`);
    setBetEntered(true); // Set the state variable to true when this button is pressed
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Bet With Account</Typography>

      <TextField
        fullWidth
        label="What account (index) to use?"
        variant="outlined"
        type="number"
        onChange={(e) => setAccountIndex(Number(e.target.value))}
      />
      <Button variant="contained" color="primary" onClick={handleAccountInput}>
        Enter
      </Button>

      {accountAddress && lt0Balance !== null && (
        <Typography variant="h6">
          The account of address {accountAddress} has {lt0Balance} LT0
        </Typography>
      )}

      <TextField
        fullWidth
        label="Bet how many times"
        variant="outlined"
        type="number"
        onChange={(e) => setBetTimes(Number(e.target.value))}
      />
      <Button variant="contained" color="primary" onClick={handleBetInput}>
        Enter
      </Button>

      {betEntered && ( // Check the state variable
        <>
          <Typography variant="h6">Bets placed: {betTimes}</Typography>
          <Typography variant="h6">
            LT0 Balance: {lt0Balance ? lt0Balance : "Query"}
          </Typography>
          {accountAddress && lt0Balance !== null && (
            <Typography variant="h6">
              Account status: The account of address {accountAddress} has{" "}
              {lt0Balance} LT0
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}

export default BetWithAccount;
