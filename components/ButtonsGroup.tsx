import React, { useState } from 'react'
import {styled} from '@mui/material/styles';
import { colors, Paper } from '@mui/material';
import {ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses} from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    '&:focus': {
      backgroundColor: "black !important",
      color: "white !important",
    },
    '&:hover': {
        backgroundColor: "black !important",
        color: "white !important",
    },


    [`& .${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    }
  },
}));



const ToggleButtons = () => {
  const [Statut, setStatut] = useState('');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newStatut: string
  ) => {
    setStatut(newStatut);
  }

  return (
    <Paper elevation={0} 
    sx={
      (theme) => ({
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
        backgroundColor: "#F5F7F9"
      })}
    >
      <StyledToggleButtonGroup
        size='small'
        value={Statut}
        exclusive
        onChange={handleChange}
        aria-label='Statut'
      >
        <ToggleButton value='En cours'>En cours</ToggleButton>
        <ToggleButton value='Validé'>Validé</ToggleButton>
        <ToggleButton value='Refusé'>Refusé</ToggleButton>
        <ToggleButton value='Entretien'>Entretien</ToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  )
}

export default ToggleButtons