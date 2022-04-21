const Stats = () => {
    return (
        <div className="stats">
            <div className="stat-item">
            <div className="icon green">
                <i className="fa fa-refresh"></i>
            </div>

            <div className="entry">
                <p className="text">255</p>
                <p className="light-text">Total Entries</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon yellow">
                <i className="fa fa-envelope"></i>
            </div>

            <div className="entry">
                <p className="text">255</p>
                <p className="light-text">Clocked</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon green">
                <i className="fa fa-arrow-right"></i>
            </div>

            <div className="entry">
                <p className="text">300</p>
                <p className="light-text">In</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon red">
                <i className="fa fa-arrow-left"></i>
            </div>

            <div className="entry">
                <p className="text">25</p>
                <p className="light-text">Out</p>
            </div>
        </div>
        </div>
    )
}

export default Stats
