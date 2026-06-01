export function mergeSortSteps(input) {

    const arr = input.map(item => ({ ...item }));

    const events = [];

    const n = arr.length;

    function mergeSort(l, r, depth) {
        if (l >= r) return;

        const mid = Math.floor((l + r) / 2);

        // mark this range with current depth
        const levels = Array(n).fill(null);
        for (let k = 0; k < n; k++) levels[k] = null;
        for (let k = l; k <= r; k++) levels[k] = depth;

        events.push({ type: 'group', levels, range: [l, r], depth });

        mergeSort(l, mid, depth + 1);
        mergeSort(mid + 1, r, depth + 1);

        // merge
        let i = l;
        let j = mid + 1;
        const temp = [];

        while (i <= mid && j <= r) {
            events.push({ type: 'compare', indices: [i, j] });
            if (arr[i].value <= arr[j].value) {
                temp.push(arr[i]);
                i++;
            } else {
                temp.push(arr[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(arr[i]);
            i++;
        }

        while (j <= r) {
            temp.push(arr[j]);
            j++;
        }

        for (let k = l; k <= r; k++) {
            arr[k] = temp[k - l];
            events.push({ type: 'overwrite', index: k, item: arr[k] });
        }
    }

    if (n > 0) mergeSort(0, n - 1, 0);

    for (let i = 0; i < n; i++) {
        events.push({ type: 'sorted', index: i });
    }

    return events;
}
