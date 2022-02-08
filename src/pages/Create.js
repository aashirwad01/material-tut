import React, { useState } from 'react'
import { Button, ButtonGroup, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import AcUnitOutlinedIcon  from '@material-ui/icons/AcUnitOutlined'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon  from '@material-ui/icons/KeyboardArrowRight'

const useStyles=makeStyles({
  // btn:{
  //   fontSize:60,
  //   backgroundColor:'violet',
  //   '&:hover':{
  //     backgroundColor:'blue'
  //   }
  // },
  // title:{
  //   textDecoration:'underline',
  //   marginBottom:20
  // }

  field:{
    marginTop:20,
    marginBottom:20,
    display:'block'
  }



})

// can be imported using eithr { } or either by adding /typography to end

export default function Create() {



  const classes =useStyles()

  const [title,setTitle]=useState('')
  const [details, setDetails] = useState('')
  const [titleError,setTitleError]=useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault() //default action of a form being submitted is refresh the page so prevent default is used

    setDetailsError(false)
    setTitleError(false)
    if(title==''){
      setTitleError(true)
    }
    if(details==''){
      setDetailsError(true)
    }
    
    if (title && details){
      console.log(title,details)
    }

  }

  return (
    <Container>
     
     {/* <Typography //by defaukt p tag so we need to add variant
     variant="h1"
     color="primary" // we can only pass theme colors
     align='center'
     >
        Create a new Note
     </Typography> */}

     {/* <Typography //by defaukt p tag so we need to add variant
    
     color="secondary" // we can only pass theme colors secondary is pink
    noWrap // it truncates the text till width of screen , text does not pass it onto new line good to preview text
     >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere officia minima illum hic tenetur quis ducimus deserunt. Dolorum dolor atque minus impedit quisquam sequi nulla autem fuga provident qui!
     </Typography> */}


    


     {/* <Button
     // by default without variant we get text buttons without background
     type="submit"  
     color="primary"
     >
       Submit
     </Button>

     <Button 
     type="submit"
     color='secondary'
     variant='outlined'


     >
       Submit

     </Button> */}

     {/* this is to create a container for a group of buttons bunched up together
     if styles to buttons all can be applied at once in button group */}

     {/* <ButtonGroup color="secondary" variant='contained'> 
       <Button>One</Button>
       <Button>Two</Button>
       <Button>Three</Button>

     </ButtonGroup> */}

      {/* icons */}
     {/* <br />
    

    
     <AcUnitOutlinedIcon />
     <AcUnitOutlinedIcon color='secondary' fontSize='large' />
     <AcUnitOutlinedIcon color='secondary' fontSize='large' />
     <AcUnitOutlinedIcon color='action' fontSize='large' />
     <AcUnitOutlinedIcon color='error' fontSize='large' />
     <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}



<Typography
    // className={classes.title}

     variant="h6"
     color='textSecondary' // greyish colour not secondary
     component="h2"
     gutterBottom
     >
       Create a New Note
     </Typography>

     <form noValidate autoComplete='off' onSubmit={handleSubmit}>
     <TextField 
     onChange={(e)=>setTitle(e.target.value)}
     className={classes.field}
     label='Note Title'
     variant='outlined'
     color='secondary'
     fullWidth
     required
     error={titleError}
     />

    <TextField 
    onChange={(e)=>setDetails(e.target.value)}
     className={classes.field}
     label='Details'
     variant='outlined'
     color='secondary'
     multiline
     rows={4}
     fullWidth
     required
     error={detailsError}
     />

<Button 
    //  className={classes.btn}


     onClick={()=>{console.log('You clicked me')}}
     type="submit"
     color="secondary"
     variant="contained"
    //  disableElevation // to disable elevation and drop shadow
   
    endIcon={<KeyboardArrowRightIcon/>}
     
     >
       Submit
     </Button>

    
     </form>

   
    
    </Container>
  )
}
