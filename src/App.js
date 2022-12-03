// import accordionList from './accordianList';
import celebrities from "./celebrities.json"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Table from '@mui/material/Table';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import "./App.css";
function App() {

  const selectStyles = {
    control: (base) => ({
      ...base,
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '6px 5px',
      border: '1px solid #21274F !important',
      boxShadow: 'none',
      '&:focus': {
        border: '0 !important',
      },
    }),
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <center>
        <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
          <Grid item xs={6}>
            {
              celebrities.map(item => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <Avatar src={item.picture} />
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}><h4>{item.first} {item.last}</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CardContent>
                        <Table bordered className="mt-3">
                          <thead>
                            <tr>
                              <th align="left">Age</th>
                              <th align="left" >Gender</th>
                              <th align="left">Country</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              borderTop: "0",
                              borderBottom: "2px solid #d9d9d9",
                            }}
                          >
                            <tr style={{ borderColor: "#f0f0f0" }}>
                              <td align="left">
                                <TextField size="small"
                                  id="outlined-start-adornment"
                                  sx={{ m: 1, width: '15ch' }}
                                  InputProps={{
                                    startAdornment: <InputAdornment position="start">{item.dob}</InputAdornment>,
                                  }}
                                />
                              </td>
                              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">{item.gender}</InputLabel>
                                <Select
                                  labelId="demo-select-small"
                                  id="demo-select-small"
                                  value={age}
                                  label="Age"
                                  onChange={handleChange}
                                >
                                </Select>
                              </FormControl>

                              <td align="left">
                                <TextField size="small"
                                  id="outlined-start-adornment"
                                  sx={{ m: 1, width: '15ch' }}
                                  InputProps={{
                                    startAdornment: <InputAdornment position="start">{item.country}</InputAdornment>,
                                  }}
                                /></td>
                              {/* <Button variant="outlined" sx={{ m: 1, minWidth: 120, color: "black" }}>{item.country}</Button></td> */}
                            </tr>
                          </tbody>
                        </Table>
                        <Table>
                          <thead>
                            <tr>
                              <th align="left">Description</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              borderTop: "0",
                              borderBottom: "2px solid #d9d9d9",
                            }}
                          >
                            <textarea id="TextArea" align="left">{item.description}</textarea>
                          </tbody>
                          <IconButton aria-label="delete" size="large" sx={{ marginLeft: "35rem" }}>
                            <DeleteForeverIcon sx={{ color: "red" }} />
                          </IconButton>
                          <IconButton aria-label="delete" size="large">
                            <CreateOutlinedIcon sx={{ color: "skyblue" }} />
                          </IconButton>
                        </Table>
                      </CardContent>
                    </AccordionDetails>
                  </Accordion>
                )
              })
            }
          </Grid></Grid>
      </center>
    </div>
  );
}

export default App;
