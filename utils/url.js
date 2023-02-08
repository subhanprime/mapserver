export const ServerURL =
    process.env.NODE_ENV !== "production"
        ? process.env.NODE_DEV_MODE
        : process.env.NODE_PRO_MODE;