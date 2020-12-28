import React from 'react';
import MenuButton from "./MenuButton/MenuButton";
import Menu from "./Menu/Menu";
import MenuItem from "./MenuItem/MenuItem";


class hamburgerMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
        }
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }

    handleLinkClick() {
        this.setState({menuOpen: false});
    }

    render(){
        const styles=
            {
                container:{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: '99',
                    opacity: 0.9,
                    display:'flex',
                    alignItems:'center',
                    background: 'black',
                    width: '100%',
                    color: 'white',
                    fontFamily:'Lobster',
                },
            }
        const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
        const menuItems = menu.map((val,index)=>{
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });

        return(
            <div>
                <div style={styles.container}>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                </div>
                <Menu open={this.state.menuOpen}>
                    {menuItems}
                </Menu>
            </div>
        )
    }
}

export default hamburgerMenu;


