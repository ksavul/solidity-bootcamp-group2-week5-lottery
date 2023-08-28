import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, Box } from "@mui/material";

function CheckState() {
  // State to store the status of the lottery (Open/Closed)
  const [lotteryStatus, setLotteryStatus] = useState<string | null>(null);

  // Function to simulate an API call to get the status of the lottery
  const checkLotteryStatus = async () => {
    try {
      // Simulate an API call
      // Replace this with your actual API call, e.g., axios.get(...)
      const response = await new Promise<{ data: string }>((resolve) => {
        setTimeout(() => {
          resolve({ data: Math.random() > 0.5 ? "Open" : "Closed" });
        }, 1000);
      });

      // Update the state with the received status
      setLotteryStatus(response.data);
    } catch (error) {
      console.error("Error checking state:", error);
      // Handle errors here (e.g., show an error message)
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
      <Typography variant="h4">Check State</Typography>
      <Typography variant="h5">
        The lottery is {lotteryStatus ? lotteryStatus : "Unknown"}
      </Typography>
      <Button variant="contained" color="primary" onClick={checkLotteryStatus}>
        Check Status
      </Button>
    </Box>
  );
}

export default CheckState;
