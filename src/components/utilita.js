// Function to get random words
export const getRandomWords = (wordsArray, count = 4) => {
    const shuffled = [...wordsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};