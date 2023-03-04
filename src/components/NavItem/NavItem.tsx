import { Link } from "@chakra-ui/react";

import styles from "./NavItem.module.scss";

interface NavItemProps {
    name: string;
    path: string;
}

const NavItem = ({ name, path }: NavItemProps) => (
    <Link
        className={styles.button}
        px={2}
        py={1}
        rounded={"md"}
        href={path}
    >
        {name}
    </Link>
);

export default NavItem;
