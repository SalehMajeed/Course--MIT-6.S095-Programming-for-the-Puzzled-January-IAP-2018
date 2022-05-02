const persons = ['F', 'F', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'F', 'F', 'B', 'F'];
function findPositions(persons) {
    let start = 0;
    let forward = 0;
    let backward = 0;
    let intervals = [];
    let flip = '';

    for (let index = 1; index < persons.length - 1; index++) {
        const eachPerson = persons[index]
        if (persons[start] !== eachPerson) {
            intervals.push([start, index - 1, persons[start]]);
            if (persons[start] === 'F') {
                forward += 1;
            } else {
                backward += 1;
            }
            start = index
        }
    }

    intervals.push([start, persons.length - 1, persons[start]])

    if (persons[start] === 'F') {
        forward += 1;
    } else {
        backward += 1;
    }

    if (forward < backward) {
        flip = 'F';
    } else {
        flip = 'B';
    }

    intervals.forEach(t => {
        if (t[2] == flip) {
            console.log('People in positions', t[0], 'through', t[1], 'flip your caps')
        }
    })
}

findPositions(persons);