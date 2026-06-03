import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";

function LanguageSelector({
    language,
    setLanguage,
    disabled = false
}) {

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>
                Language
            </InputLabel>

            <Select
                value={language}
                label="Language"
                disabled={disabled}
                onChange={(e)=>
                    setLanguage(e.target.value)
                }
            >
                <MenuItem value="java">
                    Java
                </MenuItem>

                <MenuItem value="cpp">
                    C++
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageSelector;