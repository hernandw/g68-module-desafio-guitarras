export const home = (req, res) => {
    res.render('inicio', {
        title: 'Home Page'
    })
} 

export const about = (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
}

export const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Page'
    })
}

export const addGuitarForm = (req, res) => {
    res.render('addGuitar', {
        title: 'Guitar Form'
    })
}