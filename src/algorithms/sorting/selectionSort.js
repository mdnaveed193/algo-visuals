export function selectionSortSteps(arr) {

    const array = [...arr];

    const events = [];

    const n = array.length;

    for (let i = 0; i < n - 1; i++) {

        let min = i;

        for (let j = i + 1; j < n; j++) {

            events.push({
                type: "compare",
                indices: [min, j],
                line:8
            });

            if (array[j].value < array[min].value) {
                min = j;
            }
        }

        if (min !== i) {

            [array[i], array[min]] =
            [array[min], array[i]];

            events.push({
                type: "swap",
                indices: [i, min],
                line:16
            });
        }

        events.push({
            type: "sorted",
            index: i
        });
    }

    events.push({
        type: "sorted",
        index: n - 1
    });

    return events;
}