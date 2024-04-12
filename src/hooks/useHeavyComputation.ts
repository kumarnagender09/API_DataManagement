import {useMemo} from 'react';

//This defines an interface called Item. 
//It specifies the expected structure of data passed to the useHeavyComputation hook. 
//An Item object should have two properties:
/**
 @var id: A number representing the item's unique identifier.
 @var title: A string representing the item's title.
 */
interface Item {
  id: number;
  title: string;
}
//Inside the useHeavyComputation hook, we define a function named computeDetails.
//The computeDetails function takes an item argument with the type Item.
//This code performs a potentially expensive computation. It iterates 1000000 times and concatenates the item.title string to the details variable.
//Measuring Duration:
/*
This block measures the execution time of the computation.
startTime is set using performance.now() before the loop.
endTime is set after the loop.
The difference (endTime - startTime) is calculated and stored in durationInMilliseconds.
Finally, the duration is logged to the console.
*/
//The computeDetails function returns the details string, which is the result of the heavy computation.

const useHeavyComputation = () => {
  const computeDetails = useMemo(() => {
    return (item: Item) => {
      let details = '';
      const startTime = performance.now();
      for (let i = 0; i < 1000000; i++) {
        details += item.title;
      }
      const endTime = performance.now();
      const durationInMilliseconds = endTime - startTime;

      console.log(
        `Heavy computation took: ${durationInMilliseconds} milliseconds`,
      );
      return details;
    };
  }, []);

  return computeDetails;
};

export default useHeavyComputation;
