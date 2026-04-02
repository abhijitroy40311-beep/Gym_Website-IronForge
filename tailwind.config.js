tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: '#0a0a0a',
                darker: '#050505',
                brand: '#ff2a00', // Electric Red
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            animation: {
                'hero-zoom': 'zoom 10s infinite alternate',
                'glow-pulse': 'glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                zoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' }
                },
                glow: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: .5 }
                }
            }
        }
    }
}