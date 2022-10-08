import React from "react";
import './trackList.css';
import { Track } from '../track/track.js';

export class TrackList extends React.Component {
    render () {
        return (
            <div className="TrackList">
                { 
                    this.props.tracks.map((track) => {
                        return (<Track 
                        key={track.id} 
                        track={track} 
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}/>)          
                    }) 
                }
            </div>
        )
    }
}