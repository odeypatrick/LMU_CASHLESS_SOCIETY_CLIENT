import './widgets.css'

const Balance = () => {
    return (
        <div className="balance">
            {/* <div>
                <h3>Wallet Balance</h3>
                <h1 style={{marginBottom: '20px'}}>₦5000.00</h1>

                <button>Deposit</button>
                <button>Details</button>
            </div> */}
            <div class="cc">
  <div class="cc__front">
    <div class="cc__brand">
      <div class="cc__brand-logo">
        <span class="cc__logo-circle cc__logo-circle--left"></span>
        <span class="cc__logo-circle cc__logo-circle--right"></span>
      </div>
      <span class="cc__brand-text">Mastercard</span>
    </div>
    <div class="cc__number">
      <span class="cc__number-dot"></span>
      <span class="cc__number-dot"></span>
      <span class="cc__digits">2130</span>
    </div>
    <div class="cc__balance-text">₦ 4,600.00</div>
  </div>
</div>
        </div>
    )
}

export default Balance
