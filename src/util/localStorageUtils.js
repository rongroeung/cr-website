function setItemWithExpiry(key, value, ttl) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl // ttl is in milliseconds
    }
    localStorage.setItem(key, JSON.stringify(item))
}

function getItemWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}



export {
    setItemWithExpiry,
    getItemWithExpiry
}
