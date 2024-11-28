import { Button } from '@mui/material';
import React from 'react';

// estou fazendo esse componente para reutilizá-lo em diversas partes do site como
// menus,footers e quaqluer area que peça um link de navegação

const NavItem = ({ href, children, className, sx}) => {
return (
    <Button href={href} className={className} sx={sx}>
        {children}

    </Button>
);
};

export default NavItem;