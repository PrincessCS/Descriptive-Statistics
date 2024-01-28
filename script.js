// Descriptive statistics

const numbers =[2,4,4,5,5,8,3,10,4,6,9,4,1]

class Statistics {
    calculateMean (){
       const sum = numbers.reduce ((acc, num) => acc + num, 0);
        return sum/ numbers.length;
       
        
    }

    calculateMedian (){
        const sortedNumbers = numbers.sort((a, b) => a - b);
        const middleNumber =
          Math.floor(sortedNumbers.length / 2);
          return sortedNumbers.length % 2 === 0
    ? (sortedNumbers[middleNumber - 1] + sortedNumbers[middleNumber]) / 2
    : sortedNumbers[middleNumber];
    }

    calculateMode(){
        const freqTable = {};

       numbers.forEach((value) => {
       freqTable[value] = freqTable[value] + 1 || 1;
    });

        const mode = Object.keys(freqTable).reduce((a, b) =>
       freqTable[a] > freqTable[b] ? a : b
    );
    }


    calculateRange (){
        const sortedNumbers = numbers.sort((a,b)=> a -b);
        return sortedNumbers[sortedNumbers.length -1] - sortedNumbers[0]

    }

    calculateVariance (){
        const meanValue = statistics.calculateMean ();
        const variance = numbers.map((num) => (num - meanValue) ** 2);
        return statistics.calculateMean(variance);


    }

    calculateStandardDeviation(){
        return Math.sqrt(statistics.calculateVariance())
    }
   
}

const statistics = new Statistics()

console.log(statistics.calculateMean())
console.log(statistics.calculateMedian())
console.log(statistics.calculateRange())
console.log(statistics.calculateVariance())
console.log(statistics.calculateStandardDeviation())
console.log(statistics.calculateMode())



