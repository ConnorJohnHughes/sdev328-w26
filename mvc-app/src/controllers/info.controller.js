
export const landingInfo = (req, res) => {
    res.status(200).json({
        message: "Welcome to my API",
        author: "Josh Archer",
        version: 1.0
    })
}

export const contactInfo = (req, res) => {
    res.status(200).json({
        email: "jarcher@greenriver.edu",
        phone: "222-333-4444"
    })
}