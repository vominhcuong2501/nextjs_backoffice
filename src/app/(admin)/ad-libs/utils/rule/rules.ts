import * as yup from 'yup'
import type { CustomTypeConfig } from '@types'

export const fullNameValidate = (t?: CustomTypeConfig<string>) => {
    return yup
        .string()
        .trim()
        .required(t?.txt_please_enter_your_full_name)
        .max(255, t?.txt_field_invalid)
        .min(1, t?.txt_field_invalid)
    // .matches(/^[a-zA-ZÀ-ỹ\s.,\-_()*&0-9]{1,255}$/u, t?.txt_format_your_full_name)
}

export const emailValidate = (t?: CustomTypeConfig<string>) => {
    return yup
        .string()
        .required(t?.txt_form_enter_email)
        .email(t?.txt_form_email_invalid)
        .test({
            name: 'email',
            exclusive: false,
            message: t?.txt_form_email_invalid,
            test: (value) => {
                if (!value) return false

                const splitValue = String(value).split('@')

                if (splitValue.length !== 2) return false

                const domain = splitValue[1]

                if (!domain.includes('.')) return false

                return value.includes('@')
            }
        })
}

export const selectOptionsValidate = (t?: CustomTypeConfig<string>) => {
    const message = {
        required:
            (t ? ('requiredMessage' in t ? t.requiredMessage : t.txt_mp_this_field_is_required) : undefined) ?? '',
        invalid: (t ? ('invalidMessage' in t ? t.invalidMessage : t.txt_field_invalid) : undefined) ?? ''
    }

    return yup
        .object({
            label: yup.string().trim().required(message.required),
            value: yup.string().trim().required(message.required)
        })
        .nullable()
        .typeError(message.invalid)
    // .test('required', message.required, (val) => (val ? Object.keys(val).length > 0 : val ? true : false))
}

export const optionalSelectOptionsValidate = () => {
    return yup
        .object({
            label: yup.string().optional(),
            value: yup.string().optional()
        })
        .optional()
        .nullable()
}

export const phoneNumberValidate = (t?: CustomTypeConfig<string>) => {
    return yup.string().trim().required(t?.txt_please_enter_phone_number).min(6, t?.txt_phone_number_invalid)
    // .matches(/^\+\d{1,3}\d{6,19}$/, t?.txt_phone_number_invalid)
}
