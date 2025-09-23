
import React from 'react'

interface ResetPasswordFormProps {
  token: string;
}


const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {



  return (
    <div>Reset Password Form ${token}</div>
  )
}

export default ResetPasswordForm