import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const EtudBox = (props) => {
    const [note, setnote] = useState(3);
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleNote = (e) => {
        setnote(e.target.value);
    }

    const Note = () => {
        props.handle(note, props.etudiant._id);
    }

    return (
        <Box component="section" sx={{ p: 2, border: '1px solid grey' , borderRadius: 5, marginBottom: 2, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid xs={7} item>
                    {props.etudiant.first_name} {props.etudiant.last_name}
                </Grid>
                <Grid xs={1} item>
                    Note: {note}
                </Grid>
                <Grid item>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={note}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        shiftStep={30}
                        step={1}
                        marks
                        min={1}
                        max={5}
                        sx={{ width: 100 }}
                        onChange={handleNote}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={Note}>Noter</Button>
                </Grid>
            </Grid>


        </Box>
    );
}

export default EtudBox;