import { Paper, Box } from '@mui/material'
import ControlPanel from './ControlPanel'
import VisualizationBoard from '../visualization/VisualizationBoard'
import { bubbleSortSteps } from '../../algorithms/sorting/bubbleSort'
import { selectionSortSteps } from '../../algorithms/sorting/selectionSort'
import { insertionSortSteps } from '../../algorithms/sorting/insertionSort'

import { useState, useRef } from 'react'

const clampLen = (arr) => arr.length >= 5 && arr.length <= 10

// function generateRandomArray() {
//     const len = Math.floor(Math.random() * 6) + 5 // 5..10
//     return Array.from({ length: len }, () => Math.floor(Math.random() * 90) + 10)
// };

function generateRandomArray() {
    const len = Math.floor(Math.random() * 6) + 3

    return Array.from(
        { length: len },
        (_, index) => ({
            id: Date.now() + index,
            value: Math.floor(Math.random() * 90) + 10
        })
    )
}

const sleep = (ms) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );

function MainSection({ algorithm,
    setAlgorithm,
    currentLine,
    setCurrentLine,
    currentEvent,
    setCurrentEvent
}) {
    const [array, setArray] = useState(() => generateRandomArray())
    const [input, setInput] = useState('')

    const [activeIndices, setActiveIndices] = useState([]);

    const [sortedIndices, setSortedIndices] = useState([]);

    const [pointerI, setPointerI] = useState(null);

    const [pointerJ, setPointerJ] = useState(null);
    const [pointerMin, setPointerMin] = useState(null);

    // const [currentEvent, setCurrentEvent] = useState(null);
    const [running, setRunning] = useState(false);
    const runningRef = useRef(false);
    const [origArray, setOrigArray] = useState(null);
    const [speed, setSpeed] = useState("normal");
    const [pointerNext, setPointerNext] = useState(null);

    // const [algorithm, setAlgorithm] =
    //     useState("bubble");

    // const [currentLine, setCurrentLine] =
    //     useState(null);

    const getDelay = () => {

        if (speed === "slow")
            return 1700;

        if (speed === "fast")
            return 450;

        return 800;
    };

    const handleGenerate = () => {

        const a = generateRandomArray();

        setArray(a);

        setInput("");

        setActiveIndices([]);

        setSortedIndices([]);

        setPointerI(null);

        setPointerJ(null);

        setPointerMin(null);
        setPointerNext(null);


        setCurrentEvent(null);
        setOrigArray(a.map(it => ({ ...it })));
    }

    const handleApply = () => {
        const numbers = input
            .split(/[,\s]+/)
            .map((s) => Number(s))
            .filter((n) => !Number.isNaN(n));

        if (!clampLen(numbers))
            return alert("Provide between 5 and 10 numeric elements");

        const arrayObjects = numbers.map((num, index) => ({
            id: Date.now() + index,
            value: num
        }));

        setArray(arrayObjects);
        setActiveIndices([]);
        setSortedIndices([]);
        setPointerI(null);
        setPointerJ(null);
        setPointerMin(null);
        setPointerNext(null);
        setInput("");
        setOrigArray(arrayObjects.map(it => ({ ...it })));
    }

    const handleReset = () => {
        // stop running
        runningRef.current = false;
        setRunning(false);

        if (origArray) {
            setArray(origArray.map(it => ({ ...it })));
        }

        setActiveIndices([]);
        setSortedIndices([]);
        setPointerI(null);
        setPointerJ(null);
        setPointerMin(null);
        setPointerNext(null);
        setCurrentEvent(null);
    }

    const handleStart = async () => {

        if (running) return;

        setRunning(true);

        // const events =
        //     bubbleSortSteps(array);
        let events = [];

        if (algorithm === "bubble") {
            events =
                bubbleSortSteps(array);
        }

        else if (
            algorithm === "selection"
        ) {
            events =
                selectionSortSteps(array);
        }

        else if (
            algorithm === "insertion"
        ) {
            events =
                insertionSortSteps(array);
        }

        // capture original array before sorting starts
        setOrigArray(array.map(it => ({ ...it })));
        let currentArray = [...array];

        if (algorithm !== "selection") {
            setPointerMin(null);
        }

        // mark running refs
        runningRef.current = true;
        setRunning(true);

        for (const event of events) {
            if (!runningRef.current) break;
            setCurrentEvent(event);

            if (event.line) {
                setCurrentLine(event.line);
            } else {
                setCurrentLine(null);
            }
            if (event.type === "setPointers") {

                setPointerI(event.iIndex);

                setPointerMin(event.minIndex);

                setPointerJ(event.jIndex);

                await sleep(getDelay() / 2);
            }

            // if (event.type === "compare") {

            //     const [left, right] = (event.indices || []);

            //     if (event.iIndex !== undefined || event.jIndex !== undefined || event.minIndex !== undefined) {
            //         setPointerI(event.iIndex ?? null);
            //         setPointerMin(event.minIndex ?? null);
            //         setPointerJ(event.jIndex ?? null);
            //     } else {
            //         setPointerI(left ?? null);
            //         setPointerMin(null);
            //         setPointerJ(right ?? null);
            //     }

            //     setActiveIndices(event.indices);

            //     await sleep(getDelay());
            // }
            if (event.type === "compare") {

                if (algorithm === "bubble") {

                    setPointerI(null);

                    setPointerMin(null);

                    setPointerJ(event.jIndex);

                    setPointerNext(event.nextIndex);

                } else {

                    const [left, right] = event.indices || [];

                    if (
                        event.iIndex !== undefined ||
                        event.jIndex !== undefined ||
                        event.minIndex !== undefined
                    ) {

                        setPointerI(event.iIndex ?? null);

                        setPointerMin(event.minIndex ?? null);

                        setPointerJ(event.jIndex ?? null);

                    } else {

                        setPointerI(left ?? null);

                        setPointerMin(null);

                        setPointerJ(right ?? null);
                    }

                    setPointerNext(null);
                }

                setActiveIndices(event.indices);

                await sleep(getDelay());
            }

            else if (event.type === "swap") {

                const [a, b] =
                    event.indices;

                [currentArray[a],
                currentArray[b]]
                    =
                    [currentArray[b],
                    currentArray[a]];

                setArray([
                    ...currentArray
                ]);

                await sleep(getDelay());
            }
            else if (event.type === "minUpdate") {

                setPointerI(event.iIndex);

                setPointerMin(event.minIndex);

                setPointerJ(event.jIndex);

                await sleep(getDelay() / 2);
            }

            else if (event.type === "minUpdate" || event.type === "insertion" || event.type === "keySelection") {
                await sleep(getDelay() / 2);
            }

            else if (event.type === "sorted") {

                setSortedIndices(
                    (prev) => [
                        ...prev,
                        event.index
                    ]
                );

                await sleep(getDelay() / 2);
            }
        }

        setActiveIndices([]);
        setCurrentEvent(null);
        runningRef.current = false;
        setRunning(false);
        setPointerI(null);
        setPointerJ(null);
        setPointerMin(null);
        setPointerNext(null);
    };

    return (
        <Paper sx={{ p: 1 }}>
            <ControlPanel
                input={input}
                setInput={setInput}
                onApply={handleApply}
                onGenerate={handleGenerate}
                onStart={handleStart}
                speed={speed}
                setSpeed={setSpeed}
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                running={running}
                onReset={handleReset}

            />

            <Box sx={{
                mt: 1, height: '395px', backgroundColor: 'background.default', borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',


            }}>

                <VisualizationBoard
                    array={array}
                    activeIndices={activeIndices}
                    sortedIndices={sortedIndices}
                    pointerI={pointerI}
                    pointerJ={pointerJ}
                    pointerMin={pointerMin}
                    algorithm={algorithm}
                    pointerNext={pointerNext}

                />

            </Box>



        </Paper>
    )
}



export default MainSection






