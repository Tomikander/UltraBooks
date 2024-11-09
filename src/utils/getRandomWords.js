// Function to get random words
export const getRandomWords = (wordObjects, count = 4) => {
    const shuffled = [...wordObjects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};