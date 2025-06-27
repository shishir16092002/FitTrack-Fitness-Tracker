export const formatDate = (date) => {
    const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
    }
<<<<<<< HEAD
    return (new Date(date)).toLocaleDateString("en-IN", options);
=======
    return (new Date(date)).toLocaleDateString("en-US", options);
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
} 