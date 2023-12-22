import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  label: string;
  path: string;
}

function HeaderLink({ label, path }: HeaderLinkProps): ReactElement {
  console.log(label, path);

  return (
    <li>
      <Link to={path}>{label}</Link>
    </li>
  );
}

export default HeaderLink;
