const listClients = require('./listClients');

module.exports = async () => {
  const clients = await listClients();

  const getCriticalClients = clients.map((client) => {
    const problemSum = client.problems.reduce(
      (acc, problem) => acc + problem.level,
      0,
    );
      
    const score = (1 / (1 + Math.exp(-(-2.8 + problemSum)))) * 100;
    return { ...client, score };
  });
  return getCriticalClients;
};