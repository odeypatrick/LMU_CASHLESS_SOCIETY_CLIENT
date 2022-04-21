const Header = ({ page }) => {
    const style = {
        header: {
            padding: '5px 20px',
            borderBottom: '1px solid #eee',
            display: 'flex',
            'justify-content': 'space-between',
            'margin-bottom': '20px',
            backgroundColor: '#fff'
        },
        userImg: {
            height: '30px',
            width: '30px',
            overflow: 'hidden',
            borderRadius: '100%'
        },
        img: {
            width: '100%'
        },
        fakeInput: {
            background: '#fff',
            'border-radius': '20px',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'space-between',
            'overflow': 'hidden',
            'width': '350px',
            padding: '0 10px',
            color: '#ccc',
            'margin-left': '20px',
            border: '1px solid #ccc'
        }
    }

    return (
        <div className="app-header" style={style.header}>
            <div>
                <div className="fake-input" style={style.fakeInput}>
                    <input type="text" placeholder="Search"/>
                    <i className="fa fa-search"></i>
                </div>
            </div>

            <div className="user flex-a" style={{ cursor: 'pointer' }}>
                <div className="user-img" style={style.userImg}>
                    <img style={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFiC2uxAgDWKIecVHsdIcTS4Sjmtu4mhLRg&usqp=CAU"/>
                </div>
                <span style={{ fontSize: '12px', marginLeft: '5px' }}>Patrick <i className="fa fa-caret-down"></i></span>
            </div>
        </div>
    )
}

export default Header
