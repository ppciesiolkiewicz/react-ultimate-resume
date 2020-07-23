import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/brands/github.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    github: {
        icon: GithubIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.socialLinks.github"
                defaultMessage="Check out my projects on {platform}"
                values={{ platform: 'Github' }}
            />
        ),
        getLink: () => `https://github.com/ppciesiolkiewicz`
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.socialLinks.linkedIn"
                defaultMessage="Visit my {platform} profile"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: () => `www.linkedin.com/in/piotr-ciesiolkiewicz`
    },
    copyShareUrl: {
        icon: (props) => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    }
});
