import React, { useState } from "react";
import axios from "axios";
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
  const [prizeMessage, setPrizeMessage] = useState<string | null>(null);
  const [claimDecision, setClaimDecision] = useState<string | null>(""); // Initialize with an empty string

  const handleAccountInput = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/check-player-prize?accountIndex=${accountIndex}`
      );

      if (response.data === 0) {
        setPrizeMessage("Player prize: 0");
      } else {
        setPrizeMessage(`Player prize: ${response.data}`);
      }
    } catch (error) {
      console.error("Error fetching player prize:", error);
    }
  };

  const handleClaimDecision = async () => {
    try {
      const response = await axios.post("http://localhost:3001/claim-prize");

      if (response.data.success) {
        setPrizeMessage("Prize claimed");
      } else {
        setPrizeMessage("Failed to claim prize");
      }
    } catch (error) {
      console.error("Error claiming prize:", error);
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

      {prizeMessage && <Typography variant="h6">{prizeMessage}</Typography>}

      {/* Render the "Claim Prize" section with value and onChange */}
      <Typography variant="h6">Do you want to claim your prize?</Typography>
      <Select
        fullWidth
        value={claimDecision} // Set the selected value
        variant="outlined"
        onChange={(e) => setClaimDecision(e.target.value as string)} // Update selected value
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleClaimDecision}>
        Enter
      </Button>
    </Box>
  );
}

export default CheckPlayerPrize;
