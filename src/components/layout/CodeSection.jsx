import { Paper, Box } from '@mui/material'
import React from 'react'

import { codeSnippets } from '../codeSnippet/codeSnippets'
import LanguageSelector from '../controls/LanguageSelector'
import Editor from '@monaco-editor/react'
import { useEffect, useRef } from "react";

function CodeSection({ algorithm, language, setLanguage, currentLine, currentEvent }) {
    const code =
        codeSnippets
        [language]
        [algorithm]
            .join("\n");
    const editorRef = useRef(null);
    const monacoRef = useRef(null);

    const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
};
const decorationRef = useRef([]); // to highlight current line

useEffect(() => {

    if (
        !editorRef.current ||
        !monacoRef.current ||
        !currentLine
    ) {
        return;
    }

    decorationRef.current =
        editorRef.current.deltaDecorations(
            decorationRef.current,
            [
                {
                    range:
                        new monacoRef.current.Range(
                            currentLine,
                            1,
                            currentLine,
                            1
                        ),
                    options: {
                        isWholeLine: true,
                        className: "highlightLine"
                    }
                }
            ]
        );

}, [currentLine]);

    return (
        <Paper sx={{
            p: 1,
            height: '100%', display: 'flex', flexDirection: 'column', position: 'relative',
        }}>
            <Box>
                <LanguageSelector
                    language={language}
                    setLanguage={setLanguage}
                />
            </Box>

            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                <Editor
                onMount={handleEditorMount}
                    height="400px"
                    theme="vs-dark"
                    language={
                        language === "java"
                            ? "java"
                            : "cpp"
                    }
                    value={code}

                    options={{
                        readOnly: true,
                        minimap: {
                            enabled: false
                        },
                        glyphMargin: true
                    }}
                />
            </div>

            {/* (reverted) no sliding info card */}

        </Paper>
    )
}



export default CodeSection;