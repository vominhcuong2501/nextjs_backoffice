import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
        './src/libs/utils/extract-class/use-extract-class.ts'
    ],
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            '2md': '992px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1360px',
            '3xl': '1480px',
            '4xl': '1600px'
        },
        extend: {
            container: {
                center: true,
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px'
                },
                padding: {
                    DEFAULT: '16px'
                }
            },
            fontFamily: {
                primary: ['var(--roboto)']
            },
            fontSize: {
                xs: ['12px', '1'],
                sm: ['14px', '1'],
                md: ['16px', '1'],
                lg: ['18px', '1'],
                xl: ['20px', '1'],
                10: '10px',
                11: '11px',
                12: '12px',
                13: '13px',
                14: '14px',
                15: '15px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                30: '30px',
                32: '32px',
                34: '34px',
                36: '36px',
                38: '38px',
                40: '40px',
                44: '44px',
                48: '48px',
                56: '56px',
                60: '60px',
                64: '64px',
                70: '70px',
                72: '72px',
                80: '80px',
                90: '90px',
                100: '100px'
            },
            lineHeight: {
                DEFAULT: '1',
                1: '1',
                '1-1': '1.1',
                '1-2': '1.2',
                '1-3': '1.3',
                '1-4': '1.4',
                '1-5': '1.5',
                '1-6': '1.6',
                2: '2'
            },
            colors: {
                'ad-black': {
                    DEFAULT: 'var(--black)',
                    1: '#0D0D0D'
                },
                'ad-blue': {
                    DEFAULT: 'var(--blue)'
                },
                'ad-error': {
                    DEFAULT: 'var(--error)'
                },
                'ad-gray': {
                    1: '#DEE2E6',
                    2: '#CED4DA',
                    3: '#F5F5F5'
                },
                'ad-green': {
                    1: '#028C47'
                },
                'ad-placeholder': {
                    DEFAULT: '#6C757D'
                },
                'ad-primary': {
                    DEFAULT: '#0A4245'
                }
            },
            backgroundImage: {
                'ad-gradient-primary': 'var(--gradient-primary)'
            },
            boxShadow: {
                1: 'var(--shadow-1)'
            },
            clipPath: {
                'polygon-custom': 'polygon(100% 100%, 0% 100%, 0% 92px, 100% 0%)'
            }
        }
    }
} satisfies Config
