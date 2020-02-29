import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'


const Navbar = () => {
        return (
            <AuthContext.Consumer>{(AuthContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = AuthContext
                    const { isLightTheme, light, dark } = themeContext
                    const theme = isLightTheme ? light : dark
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Content App</h1>
                            <div onClick={toggleAuth}>
                                { isAuthenticated ? 'Logg in' : 'Logg out' }
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
}
 
export default Navbar;