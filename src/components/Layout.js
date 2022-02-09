import React from 'react';
import {AppBar, Avatar, makeStyles} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {SubjectOutlined} from '@material-ui/icons'
import {AddCircleOutlineOutlined} from '@material-ui/icons'
import { useHistory,useLocation } from 'react-router-dom'
// import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import {format} from 'date-fns'


const drawerWidth=240
const useStyles=makeStyles((theme)=>{
    return {
        page:{
            background:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth,
    
        },
        drawerPaper:{
            width:drawerWidth,
    
        },
        root:{
            display:'flex',
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1,
        },
        avatar:{
            marginLeft:theme.spacing(2),
        }

    }
    
})

export default function Layout({children}) {
    const classes=useStyles()

    const history=useHistory()

    const location=useLocation()


    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary" />,
            path:'/'

        },
        {
            text:'Create Notes',
            icon:<AddCircleOutlineOutlined color="secondary" />,
            path:'/create'

        },

    ]


  return <div className={classes.root}>

      <AppBar
      className={classes.appbar}
      elevation={0}
      >
          <Toolbar>
              <Typography className={classes.date}>
                  Today is the {format(new Date(),'do MMMM Y')}
              </Typography>
              <Typography>
                  Mario
              </Typography>
              <Avatar src="data:image/jpeg;base64,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"
              className={classes.avatar}
              />
          </Toolbar>
      </AppBar>

    <Drawer 
    className={classes.drawer}
    variant="permanent"
    anchor='left'
    classes={{paper:classes.drawerPaper}}
    >
        <div>
        <Typography variant="h5" className={classes.title}>
            Notes Wala
        </Typography>
        </div>
        
        <List>
            {menuItems.map(item=>(
                <ListItem 
                button
                key={item.text}
                onClick={()=>history.push(item.path)}
                className={location.pathname=== item.path ? classes.active :null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText 
                    primary={item.text}
                    />
                </ListItem>
            ))}
        </List>
    </Drawer>     
     
      <div className={classes.page}>
      <div className={classes.toolbar}>
        </div>
      {children}
      </div>
     
  </div>;
}
