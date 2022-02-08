import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {createTheme,ThemeProvider} from '@material-ui/core'
import { purple } from '@material-ui/core/colors'


// using createmuitheme we create custom theme and themeprovider is used to wrap the components where w ewant to use our custom theme
// we are using createmuitheme in the app js so that we can have same theme for all our application
// we can make custom themes

const theme=createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

function App() {
  return (

    <ThemeProvider theme={theme}>

    
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
