import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export default extendTheme({
    fonts: {
        heading: `'Ubuntu', sans-serif`,
        body: `'Montserrat', sans-serif`,
    },
    colors: {
        brand: {
            primary: {
                "100": "#FEF3EC",
                "200": "#f79c64",
            }
        }
    },
    styles: {
        global: (props) => ({
            body: {
                background: "gray.50",
                color: 'gray.600',
                lineHeight: 'base',
            },
        }),
    }
})