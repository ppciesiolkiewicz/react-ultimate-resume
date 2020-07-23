import React, { memo, useEffect } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { animated, config, useSpring } from 'react-spring';

import { Tooltip } from '@welovedevs/ui';
import { SHARE_LINKS_DATA } from './social_links_data';
import { BACKGROUND_LINE_SPRING_PROPS } from './social_links_spring_props';

import { styles } from './social_links_styles';

const useStyles = createUseStyles(styles);

const SocialLinksComponent = ({ useSmallLayout }) => {
    const classes = useStyles();

    const [backgroundLineSpringProps, setBackgroundLineSpringProps] = useSpring(() => ({
        ...BACKGROUND_LINE_SPRING_PROPS.default,
        config: config.slow
    }));

    useEffect(() => {
        if (!('IntersectionObserver' in (typeof window !== 'undefined' ? window : {}))) {
            return;
        }
        // eslint-disable-next-line no-undef
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting === true) {
                    setBackgroundLineSpringProps(BACKGROUND_LINE_SPRING_PROPS.active);
                } else {
                    setBackgroundLineSpringProps(BACKGROUND_LINE_SPRING_PROPS.default);
                }
            },
            { threshold: [0] }
        );
        observer.observe(document.querySelector('#footer-social-links'));
    }, []);

    return (
        <div id="footer-social-links" className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
            {!useSmallLayout && <animated.div className={classes.backgroundLine} style={backgroundLineSpringProps} />}
            <div className={classes.icons}>
                {Object.entries(SHARE_LINKS_DATA).map(([entryId, { getLink, icon: Icon, tooltipTranslation }]) => {
                    let content = <Icon key={`social_link_icon_${entryId}`} className={classes.icon} />;
                    if (typeof getLink === 'function') {
                        content = (
                            <a
                                key={`social_link_link_${entryId}`}
                                className={classes.link}
                                href={getLink()}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {content}
                            </a>
                        );
                    }
                    if (tooltipTranslation) {
                        content = (
                            <Tooltip key={`social_link_tooltip_${entryId}`} title={tooltipTranslation}>
                                <button className={classes.button} type="button">
                                    {content}
                                </button>
                            </Tooltip>
                        );
                    }
                    return content;
                })}
            </div>
        </div>
    );
};

export const SocialLinks = memo(SocialLinksComponent);
