import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

function Withdraw() {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [lt0Balance, setLt0Balance] = useState<number | null>(null);
  const [ownerPoolTokens, setOwnerPoolTokens] = useState<number | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState<number | string>("");
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Fetch account and pool data when the component mounts
  useEffect(() => {
    fetchAccountAndPoolData();
  }, []);

  const fetchAccountAndPoolData = async () => {
    // Simulate fetching data here
    setAccountAddress("0x123ABC");
    setLt0Balance(500);
    setOwnerPoolTokens(2000);
  };

  const handleWithdraw = async () => {
    // Simulate an API call to execute the withdrawal and return a transaction hash
    // Replace this with your actual API call
    const fakeTransactionHash = "0x789XYZ";
    setTransactionHash(fakeTransactionHash);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      margin="20px auto"
      alignItems="center"
    >
      <Typography variant="h4">Withdraw</Typography>

      {lt0Balance !== null && (
        <>
          <TextField
            fullWidth
            label="Withdraw how many tokens?"
            variant="outlined"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button onClick={() => setWithdrawAmount(lt0Balance || "")}>
                  Max
                </Button>
              ),
            }}
          />
          <Button variant="contained" color="primary" onClick={handleWithdraw}>
            Enter
          </Button>
        </>
      )}

      {accountAddress && lt0Balance !== null && ownerPoolTokens !== null && (
        <>
          <Typography variant="h6">
            The account of address {accountAddress} has {lt0Balance} LT0
          </Typography>
          <Typography variant="h6">
            The owner pool has {ownerPoolTokens} Tokens
          </Typography>
        </>
      )}

      {transactionHash && (
        <>
          <Typography variant="h6" align="center">
            Withdraw confirmed
          </Typography>
          <Typography variant="h6" align="center">
            Transaction hash: {transactionHash}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Withdraw;
