function woodRequirement (chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=5;
    const perBedWood=10;

    const chairWood = perChairWood*chairQuantity;
    const tableWood = perTableWood*tableQuantity;
    const bedWood = perBedWood*bedQuantity;
    const totalWood = chairWood+bedWood+tableWood;
    return totalWood;
}
console.log(woodRequirement(1,1,1));