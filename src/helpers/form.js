export const getFormData = event => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form);
    const data = Object.fromEntries(formData)
    return data
}
