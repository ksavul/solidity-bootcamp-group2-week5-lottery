import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

function CheckPlayerPrize() {
  const [accountIndex, setAccountIndex] = useState<number | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [prizeTokens, setPrizeTokens] = useState<number | null>(null);
  const [claimDecision, setClaimDecision] = useState<string | null>(null);
  const [prizeMessage, setPrizeMessage] = useState<string | null>(null);

  const handleAccountInput = async () => {
    // Simulate API call to get account address and prize tokens based on account index
    // Replace with actual API call
    setAccountAddress(`0x123${accountIndex}`);
    setPrizeTokens(Math.random() * 1000);
  };

  const handleClaimDecision = async () => {
    if (claimDecision === "Yes") {
      setPrizeMessage("Prize claimed");
    } else {
      setPrizeMessage("Prize not claimed");
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
      <Typography variant="h4">Check Player Prize</Typography>

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

      {accountAddress && prizeTokens !== null && (
        <Typography variant="h6">
          The account of address {accountAddress} has earned a prize of{" "}
          {prizeTokens} Tokens
        </Typography>
      )}

      {prizeTokens !== null && (
        <>
          <Typography variant="h6">Do you want to claim your prize?</Typography>
          <Select
            fullWidth
            value={claimDecision || ""}
            onChange={(e) => setClaimDecision(e.target.value as string)}
            variant="outlined"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClaimDecision}
          >
            Enter
          </Button>
        </>
      )}

      {prizeMessage && <Typography variant="h6">{prizeMessage}</Typography>}
    </Box>
  );
}

export default CheckPlayerPrize;
