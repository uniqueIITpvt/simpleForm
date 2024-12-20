'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  employeeId: string;
  department: string;
  employmentStatus: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    employeeId: '',
    department: '',
    employmentStatus: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Submit Successfully');

    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      employeeId: '',
      department: '',
      employmentStatus: '',
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Container maxWidth='md' className='form-container'>
        <Typography
          variant='h4'
          align='center'
          color='textPrimary'
          gutterBottom
          className='form-title'
        >
          ADD NEW EMPLOYEE
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display='flex' flexWrap='wrap' gap={3}>
            {/* Full Name */}
            <Box flex='1 1 45%'>
              <TextField
                name='fullName'
                label='Full Name'
                type='text'
                required
                fullWidth
                value={formData.fullName}
                onChange={handleChange}
                className='input-field'
              />
            </Box>

            {/* Mobile Number */}
            <Box flex='1 1 45%'>
              <TextField
                name='mobileNumber'
                label='Mobile Number'
                type='tel'
                required
                fullWidth
                value={formData.mobileNumber}
                onChange={handleChange}
                className='input-field'
              />
            </Box>

            {/* Email */}
            <Box flex='1 1 45%'>
              <TextField
                name='email'
                label='Email Address'
                type='email'
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                className='input-field'
              />
            </Box>

            {/* Employee ID */}
            <Box flex='1 1 45%'>
              <TextField
                name='employeeId'
                label='Employee ID'
                type='text'
                fullWidth
                value={formData.employeeId}
                onChange={handleChange}
                className='input-field'
              />
            </Box>

            {/* Department */}
            <Box flex='1 1 45%'>
              <FormControl fullWidth className='input-field'>
                <InputLabel id='department-label'>Department</InputLabel>
                <Select
                  name='department'
                  labelId='department-label'
                  value={formData.department}
                  onChange={handleChange}
                  className='select-field'
                >
                  <MenuItem value='hr'>HR</MenuItem>
                  <MenuItem value='it'>IT</MenuItem>
                  <MenuItem value='finance'>Finance</MenuItem>
                  <MenuItem value='marketing'>Marketing</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Employment Status */}
            <Box flex='1 1 45%'>
              <FormControl fullWidth className='input-field'>
                <InputLabel id='employment-status-label'>
                  Employment Status
                </InputLabel>
                <Select
                  name='employmentStatus'
                  labelId='employment-status-label'
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className='select-field'
                >
                  <MenuItem value='full-time'>Full-Time</MenuItem>
                  <MenuItem value='part-time'>Part-Time</MenuItem>
                  <MenuItem value='intern'>Intern</MenuItem>
                  <MenuItem value='contract'>Contract</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Submit Button */}
            <Box flex='1 1 20%'>
              <Button
                fullWidth
                variant='contained'
                type='submit'
                className='submit-button'
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
}
