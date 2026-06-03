export function insertionSortSteps(arr) {

    const array = [...arr];

    const events = [];

    for (let i = 1; i < array.length; i++) {

        let j = i;

        while (
            j > 0 &&
            array[j - 1].value >
            array[j].value
        ) {

            events.push({
                type: "compare",
                indices: [j - 1, j],
                line: 8
            });

            [array[j - 1], array[j]] =
            [array[j], array[j - 1]];

            events.push({
                type: "swap",
                indices: [j - 1, j],
                line: 10
            });

            j--;
        }
    }

    for (
        let i = 0;
        i < array.length;
        i++
    ) {
        events.push({
            type: "sorted",
            index: i
        });
    }

    return events;
}