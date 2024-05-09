const https = require('https');
const querystring = require('querystring');
const formDataModel = require('../models/formDataModel');
const Joi = require('joi');

// Joi schema for form data validation
const formDataSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email({tlds: { allow: false } }).required(),
    phone: Joi.string().regex(/^\d{9,14}$/).required(),
    business_name: Joi.string().min(2).max(50).required(),
    acceptTerms: Joi.boolean().valid(true).required()
});

exports.submitForm = async (req, res) => {
    try {
        // Validate form data except for terms
        // console.log('Form submitted:', req.body);
        const { error: formDataError, value: formDataValue } = formDataSchema
            .unknown() // Allow unknown fields (such as g-recaptcha-response)
            .validate(req.body, { abortEarly: false });

        if (formDataError) {
            // If validation fails, send error messages to the client
            // const errorMessage = formDataError.details.map(detail => detail.message).join(', ');
            
            return res.status(400).send({"error": formDataError.details});
        }

        // Verify reCAPTCHA response
        const recaptchaResponse = req.body['recaptcha_response'];
        const postData = querystring.stringify({
            secret: '6Lfec9YpAAAAAA9Kgt5KXjf0mXOzpNwcJZmub6ol',
            response: recaptchaResponse
        });

        const options = {
            hostname: 'www.google.com',
            port: 443,
            path: '/recaptcha/api/siteverify',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        const verifyRequest = https.request(options, verifyResponse => {
            let data = '';
            verifyResponse.on('data', chunk => {
                data += chunk;
            });
            verifyResponse.on('end', () => {
                const verifyResult = JSON.parse(data);
                if (!verifyResult.success) {
                    return res.status(400).send('reCAPTCHA verification failed.');
                }
                
                // Proceed with form submission
                // console.log('Form data:', formDataValue);
                formDataModel.create(formDataValue)
                    .then(() => res.send({"success": "Form submitted successfully."}))
                    .catch(error => {
                        console.error('Error submitting form:', error);
                        res.status(500).send('An error occurred while submitting the form.');
                    });
            });
        });

        verifyRequest.on('error', error => {
            console.error('Error verifying reCAPTCHA:', error);
            res.status(500).send('An error occurred while verifying reCAPTCHA.');
        });

        verifyRequest.write(postData);
        verifyRequest.end();
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Server did not catch your data');
    }
};
