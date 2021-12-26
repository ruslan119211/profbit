/**
 * Get form data
 * @returns {Promise<{form: Array, status: number}>}
 */
export async function getFormData() {
    return fetch('./backend/customer-message-form.json').then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                return data;
            })
        }
        return new Error('Error');
    })
}

export async function getSuccess() {
    return fetch('./backend/customer-message-form-success.json').then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                return data;
            })
        }
        return new Error('Error');
    })
}

export async function getError() {
    return fetch('./backend/customer-message-form-error.json').then(response => {
        if (response.status === 400) {
            return response.json().then(data => {
                return data;
            })
        }
        return new Error('Error');
    })
}
