const dataPresets = [
    { name: '1 min', time: 60, add: 0, select: false },
    { name: '1 min | 1 seg', time: 60, add: 1, select: false },
    { name: '2 min | 1 seg', time: 120, add: 1, select: false },
    { name: '3 min', time: 180, add: 0, select: false },
    { name: '3 min | 2 seg', time: 180, add: 2, select: false },
    { name: '5 min', time: 300, add: 0, select: true },
    { name: '5 min | 5 seg', time: 300, add: 5, select: false },
    { name: '10 min', time: 600, add: 0, select: false },
    { name: '15 min | 10', time: 900, add: 10, select: false },
    { name: '20 min', time: 1200, add: 0, select: false },
    { name: '30 min', time: 1800, add: 0, select: false }
]

export default dataPresets;