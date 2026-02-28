import * as yup from 'yup'
import { emailValidate } from './rules'
import type { CustomTypeConfig } from '@types'

export const loginSchema = (t?: CustomTypeConfig<string>) => {
    const schema = yup.object({
        email: emailValidate(t),
        password: yup
            .string()
            .trim()
            .required(t?.txt_we_need_your_pass)
            .min(6, t?.txt_field_invalid)
            .max(20, t?.txt_field_invalid)
            .matches(/^[^\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/, t?.txt_field_invalid)
    })

    return schema
}

export type LoginFormData = { email: string; password: string }
