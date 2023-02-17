/**
 * Create a useStyles hook.
 *
 * @example useStyle = createUseStyles({theme} => {...})
 */
export function createUseStyles(styling) {
  return (stylingParameter) => {
    const theme = {
      debug: () =>
        //  '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16)),
        'none',
      //
      signatureColor: '#2A6099',
    };

    const classes =
      typeof styling === 'function'
        ? styling({ theme, ...stylingParameter })
        : styling;

    return { classes, theme };
  };
}
