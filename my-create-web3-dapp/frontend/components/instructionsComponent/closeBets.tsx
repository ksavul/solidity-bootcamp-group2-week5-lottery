import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

function CloseBets() {
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const handleCloseBets = async () => {
    // Simulate an API call to close bets
    // Replace with actual API call
    setTransactionHash(`0x456DEF${Math.floor(Math.random() * 1000)}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Close Bets</Typography>

      <Button variant="contained" color="primary" onClick={handleCloseBets}>
        Close Bets
      </Button>

      {transactionHash && <Typography variant="h6">Bets Closed</Typography>}

      {transactionHash && (
        <Typography variant="h6">
          Transaction Hash: {transactionHash}
        </Typography>
      )}
    </Box>
  );
}

export default CloseBets;
