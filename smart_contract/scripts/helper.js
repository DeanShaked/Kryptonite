const fs = require("fs");

exports.createDeploymentFile = async (contracts) => {
  const path = "scripts/deployment.js";
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
  let fileData = "";
  const writeContract = ({ address, owner, title }) => {
    const contractText = `/* ------------------------ ${title} Contract ------------------------ */\nexport const ${title}ContractAddress = "${address}"\nexport const ${title}OwnerAddress = "${owner}"\n\n`;
    return contractText;
  };
  contracts.forEach((contract, index) => {
    const titles = ["Transactions", "NFTMarket", "NFT"];
    const fileObject = {
      address: contract.address,
      owner: contract.signer.address,
      title: titles[index],
    };
    const contractData = writeContract(fileObject);
    fileData += contractData;
  });
  fs.writeFileSync(path, fileData);
  return "File created successfully !";
};
