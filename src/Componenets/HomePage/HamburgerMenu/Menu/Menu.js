import React, {Component} from 'react';
import styles from 'Menu.module.css'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state={
            open: this.props.open? this.props.open:false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {
                    this.state.open?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div>:null
                }
            </div>
        );
    }
}

export default Menu;