const cleanPhoneNumber = phone => phone.replace(/-/g, '')

const anythingToLowerCase = anything => {
    if (!anything) {
        return ''
    }

    return String(anything).toLowerCase()
}

