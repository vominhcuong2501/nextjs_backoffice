'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AdButton, AdInput } from '@ui'
import { INPUT_TYPES } from '@constants'
import { loginSchema, type LoginFormData } from '@libs/utils/rule/login-schema'
import { getContent } from '@data'

export const FormLogin = () => {
    const { t } = getContent()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema(t)),
        defaultValues: { email: '', password: '' }
    })

    const onSubmit = async (_data: LoginFormData) => {
        await new Promise((r) => setTimeout(r, 800))
    }

    return (
        <div className='flex min-h-screen items-center justify-center p-4'>
            <div className='w-full max-w-[500px] rounded-2xl bg-white p-8 '>
                <h1 className='mb-2 text-center text-56 font-semibold text-ad-primary'>{t.txt_login_title}</h1>
                <p className='mb-6 text-center text-sm text-gray-500'>{t.txt_login_description}</p>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
                    <AdInput
                        id='login-email'
                        type={INPUT_TYPES.email}
                        placeholder={t.txt_login_email_placeholder}
                        nameLabel={t.txt_login_email_label}
                        errorMessage={errors.email?.message}
                        {...register('email')}
                    />
                    <AdInput
                        id='login-password'
                        type={INPUT_TYPES.password}
                        placeholder={t.txt_login_password_placeholder}
                        nameLabel={t.txt_login_password_label}
                        errorMessage={errors.password?.message}
                        {...register('password')}
                    />

                    <AdButton
                        type='submit'
                        className='mt-2 w-full py-3'
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                    >
                        {t.txt_login_submit}
                    </AdButton>
                </form>
            </div>
        </div>
    )
}
