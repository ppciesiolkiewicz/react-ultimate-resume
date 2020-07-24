import React, { memo } from 'react';
import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useMediaQuery } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Tooltip } from '@welovedevs/ui';
import { SocialLinks } from './social_links/social_links';

import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';

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
            <div />
            <SocialLinks />
            <div className={classes.wldLogoGithubLogoContainer}>
                <Tooltip
                    title={
                        <FormattedMessage
                            id="Footer.github.tooltip"
                            defaultMessage="Create your own developer profile!"
                        />
                    }
                >
                    <a
                        className={classes.githubLink}
                        href="https://github.com/welovedevs/developer-profile"
                        target="_bank"
                        rel="noreferer noopener"
                    >
                        <GithubLogo className={classes.githubLogo} />
                    </a>
                </Tooltip>
            </div>
        </div>
    );
};

export const Footer = memo(FooterComponent);
