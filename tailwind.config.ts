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
                placeholder: {
                    DEFAULT: '#6C757D'
                },
                primary: {
                    DEFAULT: 'var(--primary)'
                },
                black: {
                    DEFAULT: 'var(--black)',
                    1: '#0D0D0D'
                },
                red: {
                    DEFAULT: 'var(--red)',
                    1: 'var(--red-1)',
                    2: 'var(--red-2)',
                    3: '#F4E5E5'
                },
                orange: {
                    DEFAULT: 'var(--orange)',
                    1: 'var(--orange-1)',
                    2: 'var(--orange-2)',
                    3: '#F4F1E5'
                },
                blue: {
                    DEFAULT: 'var(--blue)',
                    1: 'var(--blue-1)',
                    2: 'var(--blue-2)'
                },
                gray: {
                    1: '#DEE2E6',
                    2: '#6C757D',
                    3: '#F8F9FA',
                    4: '#E9ECEF',
                    5: '#CED4DA',
                    6: '#343A40',
                    7: '#ffffff1a',
                    8: '#fff3',
                    9: '#EFEFEF',
                    10: '#ffffff4d',
                    11: '#FAFAFA',
                    12: '#d9d9d91a',
                    14: '#F0F0F0',
                    13: '#ADB5BD'
                },
                green: {
                    1: '#0A4245',
                    2: '#028C47',
                    3: '#E5F4F3',
                    4: '#28A745',
                    6: '#028c4733',
                    7: '#225557',
                    8: '#002CDA',
                    9: '#DCEFEC',
                    10: '#1C7B2D',
                    11: '#5DE8A3',
                    12: '#028c471a',
                    13: '#0d4649',
                    14: '#235349'
                },
                error: {
                    DEFAULT: 'var(--error)'
                }
            },
            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-green-1': 'var(--gradient-green-1)',
                'gradient-green-2': 'var(--gradient-green-2)',
                'gradient-green-3': 'var(--gradient-green-3)',
                'gradient-green-4': 'var(--gradient-green-4)',
                'gradient-green-5': 'var(--gradient-green-5)',
                'gradient-green-6': 'var(--gradient-green-6)',
                'gradient-green-7': 'var(--gradient-green-7)',
                'gradient-green-8': 'var(--gradient-green-8)',
                'gradient-green-9': 'var(--gradient-green-9)',
                'gradient-green-10': 'var(--gradient-green-10)',
                'gradient-green-11': 'var(--gradient-green-11)',
                'gradient-green-12': 'var(--gradient-green-12)',
                'gradient-green-13': 'var(--gradient-green-13)',
                'gradient-green-14': 'var(--gradient-green-14)',
                'gradient-gray-1': 'var(--gradient-gray-1)',
                'gradient-gray-2': 'var(--gradient-gray-2)',
                'gradient-gray-3': 'var(--gradient-gray-3)',
                'gradient-gray-4': 'var(--gradient-gray-4)',
                'gradient-gray-5': 'var(--gradient-gray-5)',
                'gradient-gray-6': 'var(--gradient-gray-6)',
                'gradient-gray-7': 'var(--gradient-gray-7)',
                'gradient-gray-8': 'var(--gradient-gray-8)',
                'gradient-gray-9': 'var(--gradient-gray-9)',
                'gradient-gray-10': 'var(--gradient-gray-10)',
                'gradient-blue-1': 'var(--gradient-blue-1)'
            },
            boxShadow: {
                1: 'var(--shadow-1)',
                2: 'var(--shadow-2)',
                3: 'var(--shadow-3)',
                4: 'var(--shadow-4)',
                5: 'var(--shadow-5)',
                6: 'var(--shadow-6)',
                7: 'var(--shadow-7)',
                8: 'var(--shadow-8)',
                9: 'var(--shadow-9)',
                10: 'var(--shadow-10)',
                11: 'var(--shadow-11)',
                12: 'var(--shadow-12)',
                13: 'var(--shadow-13)',
                14: 'var(--shadow-14)',
                15: 'var(--shadow-15)',
                16: 'var(--shadow-16)',
                17: 'var(--shadow-17)'
            },
            aspectRatio: {
                card: '407 / 240'
            },
            clipPath: {
                'polygon-custom': 'polygon(100% 100%, 0% 100%, 0% 92px, 100% 0%)',
                'polygon-triangle': 'polygon(0 0, 0% 100%, 100% 50%)',
                'polygon-triangle-up': 'polygon(50% 0%, 0% 100%, 100% 100%)',
                'polygon-triangle-down': 'polygon(0% 0%, 100% 0%, 50% 100%)',
                'polygon-triangle-left': 'polygon(0% 50%, 100% 0%, 100% 100%)',
                'polygon-triangle-right': 'polygon(0% 0%, 0% 100%, 100% 50%)'
            }
        }
    }
} satisfies Config
