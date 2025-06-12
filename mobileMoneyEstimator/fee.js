function estimateTransactionFee() {
  
  let input = prompt("Unatuma Ngapi? (KES):");
  
  let amountToSend = Number(input);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi halali (kubwa zaidi ya sifuri).");
    return;
  }

  const minFee = 10;    
  const maxFee = 70;    
  const feePercent = 0.015; 


  let calculatedFee = amountToSend * feePercent;

  let transactionFee = Math.min(Math.max(calculatedFee, minFee), maxFee);

  let totalDebited = amountToSend + transactionFee;

  
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${totalDebited.toFixed(2)}\n`);
  console.log("Send Money Securely!");
}

estimateTransactionFee();