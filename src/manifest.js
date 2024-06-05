import { Icons, PATHS } from "./utils/icons";

export const manifest = {
  icons: {
    [Icons.DEFAULT]: {
      icon: PATHS.on,
    },
    [Icons.ON]: {
      icon: PATHS.on,
    },
    [Icons.OFF]: {
      icon: PATHS.off,
    },
  },
  extension_required: true,
};
