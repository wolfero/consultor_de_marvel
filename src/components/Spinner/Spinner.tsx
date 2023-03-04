import { Box, Image } from "@chakra-ui/react";

import styles from "./Spinner.module.scss";

export const Spinner = () => {
    return (
        <Box className={styles.SpinnerBox}>
            <Image src="/loader.svg" alt="Loader" />
        </Box>
    );
};
