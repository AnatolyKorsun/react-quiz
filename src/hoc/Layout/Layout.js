import React, { Component } from "react"
import "./Layout.css"
import MenuToggle from '../components/Navigation/MenuToggle/MenuToggle.js'
import '../components/Navigation/MenuToggle/MenuToggle.css'
import Drawer from '../components/Navigation/Drawer/Drawer.js'


class Layout extends Component {
  
state = {
  menu: false
}

toggleMenuHandler =()=>{
  this.setState({
    menu: !this.state.menu
  })
}
menuCloseHandler  =  () =>{
  this.setState({
    menu: false
  })
}


  render() {
    return (
       <div className='Layout'>

         <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
         />

         <MenuToggle 
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
         />

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default Layout;
