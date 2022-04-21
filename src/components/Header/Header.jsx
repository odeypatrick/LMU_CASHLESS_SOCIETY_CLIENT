const Header = ({ page }) => {
    const style = {
        header: {
            padding: '10px',
            borderBottom: '1px solid #f3f3f3',
            display: 'flex',
            'justify-content': 'space-between'
        },
        userImg: {
            height: '30px',
            width: '30px',
            overflow: 'hidden',
            borderRadius: '100%'
        },
        img: {
            width: '100%'
        }
    }

    return (
        <div className="app-header" style={style.header}>
            <div>
                <h2>{ page }</h2>
            </div>

            <div className="user flex-a">
                <div className="user-img" style={style.userImg}>
                    <img style={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFiC2uxAgDWKIecVHsdIcTS4Sjmtu4mhLRg&usqp=CAU"/>
                </div>
                <span style={{ fontSize: '12px', marginLeft: '5px' }}>Patrick <i className="fa fa-caret-down"></i></span>
            </div>
        </div>
    )
}

export default Header
