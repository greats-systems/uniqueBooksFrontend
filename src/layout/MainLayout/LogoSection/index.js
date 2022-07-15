import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import { DASHBOARD_PATH } from 'config';
import { ANALYTICS_PATH } from 'config';

import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const { user } = useAuth();
    return(
        <Link component={RouterLink} to={ user.is_staff ? ANALYTICS_PATH : DASHBOARD_PATH }>
        <Logo />
    </Link>
    )
}

export default LogoSection;
