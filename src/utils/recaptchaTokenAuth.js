'use server'

import axios from 'axios'

export async function verifyCaptchaToken(token) {
  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    )

    if (res.data.success) {
      return 'success!'
    } else {
      throw new Error('reCAPTCHA verification failed')
    }
  } catch (error) {
    if (error.response) {
      // If there's a response from the server (e.g., 405 error), log the status and data
      console.error(`HTTP Error: ${error.response.status}`)
      console.error(`Error Data: ${JSON.stringify(error.response.data)}`)
    } else if (error.request) {
      // If the request was made but no response was received
      console.error('No response received from the server')
    } else {
      // If there was an error setting up the request
      console.error(`Request setup error: ${error.message}`)
    }

    throw new Error('Failed to verify reCAPTCHA')
  }
}

// import ReCAPTCHA from 'react-google-recaptcha'
// import { verifyCaptchaToken } from '@/src/utils/recaptchaTokenAuth'

// const recaptchaRef = useRef(null)

// async function handleCaptchaSubmission(token) {
//   // Server function to verify captchaToken
//   await verifyCaptchaToken(token)
//     .then(() => setIsverified(true))
//     .catch(() => setIsverified(false))
// }

// recaptchaRef.current.reset()  reset function

// <ReCAPTCHA
//   ref={recaptchaRef}
//   sitekey={sitekey}
//   onChange={handleCaptchaSubmission}
//   hl={lng}
//   theme="dark"
// />
