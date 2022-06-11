const Stats = () => {
    return (
        <div className="stats">
            <div className="stat-item">
            <div className="icon green">
                <i className="fa fa-refresh"></i>
            </div>

            <div className="entry">
                <p className="text">255</p>
                <p className="light-text">Total Sales</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon yellow">
                <i className="fa fa-envelope"></i>
            </div>

            <div className="entry">
                <p className="text">25</p>
                <p className="light-text">Today Sales</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon green">
                <i className="fa fa-arrow-right"></i>
            </div>

            <div className="entry">
                <p className="text">10</p>
                <p className="light-text">Failed Transactions</p>
            </div>
        </div>

        <div className="stat-item">
            <div className="icon red">
                <i className="fa fa-arrow-left"></i>
            </div>

            <div className="entry">
                <p className="text">$25</p>
                <p className="light-text">Balance</p>
            </div>
        </div>
        </div>
    )
}

export default Stats
