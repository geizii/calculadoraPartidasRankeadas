const calculateRank = (wins, loses) => {
    let rankBalance = wins - loses;

    let rank;
    
    if (rankBalance < 10) {
        rank = 'Ferro';
    } else if (rankBalance > 11 && rankBalance <= 20) {
        rank = 'Bronze';
    } else if (rankBalance > 21 && rankBalance <= 50) {
        rank = 'Prata';
    } else if (rankBalance > 51 && rankBalance <= 80) {
        rank =  'Ouro';
    } else if (rankBalance > 81 && rankBalance <= 90) {
        rank =  'Diamante';
    } else if (rankBalance > 91 && rankBalance <= 100) {
        rank = 'Lendário';
    } else if (rankBalance > 101) {
        rank =  'Imortal';
    }

    return {
        rankBalance, rank
    }
}

let result = calculateRank(205, 100);
console.log(`O herói tem um saldo de vitórias é ${result.rankBalance} e seu rank é: ${result.rank}`); 