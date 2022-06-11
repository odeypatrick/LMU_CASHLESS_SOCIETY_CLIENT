const history = () => {
    return (
        <div className="trans-history">
            <h3>Transaction history</h3>
            <div className="records">
                <a href="#" className="record flex">
                    <div className="flex">
                        <i className="fa fa-copy" style={{fontSize: '20px', marginRight: '10px', color: '#59C9A5' }}></i> 
                        <div>
                            <div>Cafeteria</div>
                            <div className="price"><b>$500.00</b></div>
                        </div>
                    </div>
                    <div className="date">
                        <span>12/03/21</span>
                        <span className="time">12:00pm</span>
                    </div>
                </a>
                <a href="#" className="record flex">
                    <div className="flex">
                        <i className="fa fa-copy" style={{fontSize: '20px', marginRight: '10px',color: '#59C9A5' }}></i> 
                        <div>
                            <div>Shopping mall</div>
                            <div className="price"><b>$1200.00</b></div>
                        </div>
                    </div>
                    <div className="date">
                        <span>12/03/21</span>
                        <span className="time">12:00pm</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default history
