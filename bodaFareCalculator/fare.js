function calculateBodaFare() {
  
  let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  
  
  let distanceInKm = Number(input);

  
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Tafadhali ingiza kilomita halali (isiyokuwa hasi).");
    return;
  }

  const baseFare = 50;         
  const chargePerKm = 15;      

  
  let totalFare = baseFare + (distanceInKm * chargePerKm);

  
  let chargeForDistance = distanceInKm * chargePerKm;

  
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${chargeForDistance}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

calculateBodaFare();