import React from 'react';
import { Box, Typography, Card, Stack} from '@mui/material';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { useNavigate } from 'react-router-dom';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';


const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <Box p={2} >
            <Typography  ml={4} fontWeight="bold" variant="h4" my={2}>Text Generation</Typography>
            <Stack direction="row" spacing={6} ml={4} >
                <Card onClick={  () => navigate("/summary") }
                        sx={{ boxShadow:2, borderRadius: 5, height:190, width:280, '&:hover': {border: 2, boxShadow: 0, borderColor:"primary.dark", cursor: "pointer"}}}>
                    <DescriptionRoundedIcon sx={{fontSize: 80, color: "primary.main", mt: 2, ml: 2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" variant="h5">Text Summarizer</Typography>
                        <Typography variant="h6">Summarize long and tedious articles into just a few sentences!</Typography>
                    </Stack>
                </Card>
                <Card onClick={  () => navigate("/paragraph") }
                        sx={{ boxShadow:2, borderRadius: 5, height:190, width:280, '&:hover': {border: 2, boxShadow: 0, borderColor:"primary.dark", cursor: "pointer"}}}>
                    <FormatAlignLeftRoundedIcon sx={{fontSize: 80, color: "primary.main", mt: 2, ml: 2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" variant="h5">Paragraph Generator</Typography>
                        <Typography variant="h6">Generate an informative blurb about any topic!</Typography>
                
                    </Stack>
                </Card>
                <Card onClick={  () => navigate("/chatbot") }
                        sx={{ boxShadow:2, borderRadius: 5, height:190, width:280, '&:hover': {border: 2, boxShadow: 0, borderColor:"primary.dark", cursor: "pointer"}}}>
                    <ChatRoundedIcon sx={{fontSize: 80, color: "primary.main", mt: 2, ml: 2}}/>
                    <Stack p={3} pt={0}>
                        <Typography fontWeight="bold" variant="h5">Yoda Chat Bot</Typography>
                        <Typography variant="h6">Gain insight from a yoda-like virtual assistant!</Typography>
                
                    </Stack>
                </Card>    
            </Stack>

            <Typography fontWeight="bold" variant="h4" ml={4} mt={8} mb={2}>Code Generation</Typography>
            <Card onClick={  () => navigate("/js-convert") }
                    sx={{ ml: 4, boxShadow:2, borderRadius: 5, height:190, width:280, '&:hover': {border: 2, boxShadow: 0, borderColor:"primary.dark", cursor: "pointer"}}}>
                <DescriptionRoundedIcon sx={{fontSize: 80, color: "primary.main", mt: 2, ml: 2}}/>
                <Stack p={3} pt={0}>
                    <Typography fontWeight="bold" variant="h5">Javascript Converter</Typography>
                    <Typography variant="h6">Translate english into javascript code!</Typography>
                </Stack>
            </Card>

            <Typography fontWeight="bold" variant="h4" ml={4} mt={8} mb={2}>Image Generation</Typography>
            <Card onClick={  () => navigate("/scifi-img") }
                    sx={{ ml: 4, boxShadow:2, borderRadius: 5, height:190, width:280, '&:hover': {border: 2, boxShadow: 0, borderColor:"primary.dark", cursor: "pointer"}}}>
                <ImageSearchRoundedIcon sx={{fontSize: 80, color: "primary.main", mt: 2, ml: 2}}/>
                <Stack p={3} pt={0}>
                    <Typography fontWeight="bold" variant="h5">Scifi Image Generator</Typography>
                    <Typography variant="h6">Create a science-fiction version of an image concept!</Typography>
                </Stack>
            </Card>
        </Box>
    )
}

export default HomeScreen;