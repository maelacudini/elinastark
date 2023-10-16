export const line = {
    initial: { right: "50%", left: "50%" },
    animate: {
        right: "10%",
        left: "10%",
        transition: { duration: 3, delay: 0.5, type: "spring" },
    },
    exit: {
        right: "50%",
        left: "50%",
        transition: { duration: 0.5, delay: 0.5 },
    },
}

export const generals = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
}

export const aboutmore = {
    initial: { y: "calc(100% + 100px)" },
    animate: {
        y: "0",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        y: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}