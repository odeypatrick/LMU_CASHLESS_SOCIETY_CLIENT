const Entry = () => {
    return (
        <div className="entry">
            <div className="entry-box">
                <div className="scroll">
                    {/* <div className="no-entry flex-center" v-if="entries.length === 0">No entry found</div> */}
                {/* <div className="entry-item">
                    <div className="image-spot">
                    <div className="image-holder">
                        <img src={entry.img} alt="img">
                    </div>
                    </div>
    
                    <div className="text">
                        <div className="name">{ entry.name }</div>
                        <div className="tag">@{{ entry.regNo }}</div>
                    </div>
    
                    <div className="right">
                        <div className="time">{{ entry.time }}</div>
                        <div className="dot" v-if="entry.status == 'clocked'"></div>
                        <div className="in green" v-if="entry.status == 'in'">In</div>
                        <div className="out red" v-if="entry.status == 'out'">Out</div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Entry
