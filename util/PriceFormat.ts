const formatPrice = (amount ) =>{
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount/100)
}

export default formatPrice; 