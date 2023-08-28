import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

function OpenBets() {
  const [duration, setDuration] = useState<number | string>("");
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [showTextBox, setShowTextBox] = useState<boolean>(false); // New state to control visibility

  const handleOpenBets = async () => {
    // Simulate an API call to open bets
    // Replace with actual API call
    setTransactionHash(`0x123ABC${Math.floor(Math.random() * 1000)}`);
  };

  const toggleTextBox = () => {
    // Function to toggle text box visibility
    setShowTextBox(!showTextBox);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Open Bets</Typography>

      {/* Button to show/hide text box */}
      <Button variant="contained" color="primary" onClick={toggleTextBox}>
        Open Bets
      </Button>

      {/* Conditionally render the text box and Enter button */}
      {showTextBox && (
        <>
          <TextField
            fullWidth
            label="Input duration (in seconds)"
            variant="outlined"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={handleOpenBets}>
            Enter
          </Button>
        </>
      )}

      {transactionHash && <Typography variant="h6">Bets opened</Typography>}

      {transactionHash && (
        <Typography variant="h6">
          Transaction Hash: {transactionHash}
        </Typography>
      )}
    </Box>
  );
}

export default OpenBets;
