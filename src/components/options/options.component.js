import React, {Component} from 'react';

const options = class options extends Component{
    constructor(props){
        super(props);

        this.state={};
    };

    componentDidMount(){
        this.setState({})
    }

    render(){
        return (
            <div>
                <br></br><br></br>
                <a href="/upload" class="btn btn-outline-primary">Upload file</a>
                <a href="/enterURL" class="btn btn-outline-success">Enter Image URL</a>
                <a href="/snapshot" class="btn btn-outline-info">Take Snapshot</a>
                <br></br>
            </div>
        )
    }
}

export default options;