export function bubbleSortSteps(input) {

    const arr = [...input]

    const events = []

    const n = arr.length

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            events.push({
                type: "compare",
                indices: [j, j + 1],
                line: 6
            })

            if (arr[j].value > arr[j + 1].value) {

                events.push({
                    type: "swap",
                    indices: [j, j + 1],
                    line: 7
                })

                ;[arr[j], arr[j + 1]]
                    =
                    [arr[j + 1], arr[j]]
            }
        }

        events.push({
            type: "sorted",
            index: n - i - 1
        })
    }

    return events
}