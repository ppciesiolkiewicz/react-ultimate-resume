import React, { memo } from 'react';
import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useMediaQuery } from '@material-ui/core';
import { SocialLinks } from './social_links/social_links';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const FooterComponent = () => {
    const classes = useStyles();
    const { screenSizes } = useTheme();

    const useSmallLayout = useMediaQuery(
        `(max-width: ${screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2}px)`,
        { defaultMatches: true }
    );

    if (useSmallLayout) {
        return (
            <div className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
                <SocialLinks useSmallLayout />
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <SocialLinks />
        </div>
    );
};

export const Footer = memo(FooterComponent);
