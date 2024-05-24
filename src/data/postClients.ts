export const postData = async () => {

    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('name');
    const lastname = sessionStorage.getItem('family_name');
    const dni = sessionStorage.getItem('custom:dni');
    const phone_number = sessionStorage.getItem('phone_number');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;


    try {
        const response = await fetch(API_URL + '/api/publicclient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                lastname: lastname,
                email: email,
                passport: dni,
                phone_number: phone_number
            }),
        });

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};